import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { ref, uploadBytes, getDownloadURL, uploadString } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from './auth';
import { strings } from '../utils/strings';

export const uploadStaticImagesBase64 = async (imageModules: number[], productId: string) => {
  try {
    if (imageModules.length === 0) return;

    const downloadUrls: string[] = [];

    for (let i = 0; i < imageModules.length; i++) {
      console.log(`${strings.processingimage} ${i + 1}/${imageModules.length}`);
      
      const asset = Asset.fromModule(imageModules[i]);
      await asset.downloadAsync();

      if (!asset.localUri) {
        throw new Error(`${strings.failedtogetlocaluri} ${i + 1}`);
      }

      console.log(`${strings.localuriimage} ${i + 1}: ${asset.localUri}`);

      await debugFileAccess(asset.localUri, i + 1);

      const url = await uploadSingleImageBase64WithRetry(asset.localUri, productId, i + 1);
      downloadUrls.push(url);

      console.log(`${strings.imagelog} ${i + 1} ${strings.uploadedsuccessfully}`);
    }

    const productDoc = doc(db, 'products', productId);
    await setDoc(
      productDoc,
      {
        images: downloadUrls,
        updatedAt: new Date(),
      },
      { merge: true }
    );

    console.log(strings.staticimageuploadfirstore);
    return downloadUrls;
  } catch (error) {
    console.error(strings.errorduringstaticimage, error);
    throw error;
  }
};

const uploadSingleImageBase64WithRetry = async (
  localUri: string,
  productId: string,
  imageIndex: number,
  maxRetries: number = 3
): Promise<string> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`${strings.uploadattempt} ${attempt} ${strings.forimage} ${imageIndex}`);
      
      const fileInfo = await FileSystem.getInfoAsync(localUri);
      console.log(`${strings.fileinfoforimage} ${imageIndex}:`, fileInfo);
      
      if (!fileInfo.exists) {
        throw new Error(`${strings.filenoexistinuri} ${localUri}`);
      }

      const imagePath = `products/${productId}/image_${imageIndex}.jpg`;
      const imageRef = ref(storage, imagePath);

      // Method 1: Try using fetch + uploadBytes (most reliable for React Native)
      try {
        console.log('Trying fetch + uploadBytes method...');
        console.log('Local URI:', localUri);
        
        // Check if the URI is accessible via fetch
        const response = await fetch(localUri);
        console.log('Fetch response status:', response.status);
        console.log('Fetch response headers:', response.headers);
        
        if (!response.ok) {
          throw new Error(`Fetch failed with status: ${response.status}`);
        }
        
        const blob = await response.blob();
        console.log('Blob created successfully, size:', blob.size, 'type:', blob.type);
        
        await uploadBytes(imageRef, blob, {
          contentType: 'image/jpeg'
        });

        const url = await getDownloadURL(imageRef);
        console.log(`${strings.succesimageupload} ${imageIndex} using fetch method on ${strings.onattempt} ${attempt}`);
        return url;
      } catch (fetchError) {
        console.log('Fetch method failed:', fetchError);
        
        // Method 2: Try using FileSystem.readAsStringAsync with uploadString (raw base64)
        try {
          console.log('Trying raw base64 uploadString method...');
          console.log(strings.readingfilebase64);
          
          const base64 = await FileSystem.readAsStringAsync(localUri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          
          if (!base64 || base64.length === 0) {
            throw new Error(strings.failedtoreadbase64);
          }
          
          console.log(`${strings.lengthbase64} ${base64.length} ${strings.characters}`);
          
          // Try uploadString with raw base64 and proper metadata
          console.log('Uploading with uploadString and base64 format...');
          await uploadString(imageRef, base64, 'base64', {
            contentType: 'image/jpeg',
            customMetadata: {
              'uploaded-by': 'expo-app'
            }
          });

          const url = await getDownloadURL(imageRef);
          console.log(`${strings.succesimageupload} ${imageIndex} using raw base64 method on ${strings.onattempt} ${attempt}`);
          return url;
        } catch (base64Error) {
          console.log('Raw base64 method failed:', base64Error);
          
          // Method 3: Manual Uint8Array conversion
          try {
            console.log('Trying manual Uint8Array conversion...');
            
            const base64 = await FileSystem.readAsStringAsync(localUri, {
              encoding: FileSystem.EncodingType.Base64,
            });
            
            if (!base64 || base64.length === 0) {
              throw new Error(strings.failedtoreadbase64);
            }
            
            // Convert base64 to Uint8Array manually
            const binaryString = atob(base64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            
            console.log('Uint8Array created, length:', bytes.length);
            
            await uploadBytes(imageRef, bytes, {
              contentType: 'image/jpeg'
            });

            const url = await getDownloadURL(imageRef);
            console.log(`${strings.succesimageupload} ${imageIndex} using Uint8Array method on ${strings.onattempt} ${attempt}`);
            return url;
          } catch (uint8Error) {
            console.error('All upload methods failed for this attempt');
            throw uint8Error;
          }
        }
      }
      
    } catch (error) {
      console.error(`${strings.uploadattempt} ${attempt} ${strings.failedforimage} ${imageIndex}:`, error);
      
      if (attempt === maxRetries) {
        throw new Error(`${strings.faileduploadimage} ${imageIndex} ${strings.after} ${maxRetries} ${strings.attempts} ${error}`);
      }
      
      const waitTime = Math.pow(2, attempt) * 1000;
      console.log(`Waiting ${waitTime}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  throw new Error(`Unexpected error in uploadSingleImageBase64WithRetry`);
};

export const debugFileAccess = async (uri: string, imageIndex: number) => {
  try {
    console.log(`=== Debug File Access for Image ${imageIndex} ===`);
    console.log(`URI: ${uri}`);
    
    const fileInfo = await FileSystem.getInfoAsync(uri);
    console.log(`Exists: ${fileInfo.exists}`);
    if (fileInfo.exists) {
      console.log(`Size: ${fileInfo.size}`);
    }
    console.log(`Is Directory: ${fileInfo.isDirectory}`);
    
    if (fileInfo.exists) {
      try {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        console.log(`Base64 read successful, length: ${base64.length}`);
        console.log(`First 50 chars: ${base64.substring(0, 50)}...`);
      } catch (readError) {
        console.error(`Failed to read as base64:`, readError);
      }
    }
    
    console.log(`=== End Debug ===`);
  } catch (error) {
    console.error(`Debug failed:`, error);
  }
};