import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { images } from "../utils/images";
import { chatstyle } from "../styles/ChatStyle";
import { Colors } from "../utils/Colors";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { useUser } from "../hooks/userContext";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../service/auth";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";

interface Message {
  id: string;
  type: "text" | "image" | "audio";
  senderName: string;
  sender: string;
  photoUrl?: string;
  content?: string;
  time: string;
  isMe: boolean;
  createdAt?: Timestamp;
}

const ChatScreen = () => {
  const colors = useColors();
  const navigation = useNavigation();
  const { name: currentUserName, photoUrl: currentUserPhotoUrl } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [otherUserName, setOtherUserName] = useState<string | null>(null);
  const { statusBarStyle } = useTheme();
  const [otherUserPhotoUrl, setOtherUserPhotoUrl] = useState<string | null>(
    null
  );

  const defaultAvatar = images.face1;

  const getUserProfile = async (uid: string): Promise<string | null> => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        return data.photoUrl || null;
      } else {
        console.log(strings.nouserfoundUID, uid);
      }
    } catch (error) {
      console.error(strings.errorfetchinguserprofile, error);
    }
    return null;
  };

  useEffect(() => {
    let fetchedPhoto = false;

    const messagesQuery = query(
      collection(db, "chats", "chatId", "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, async (snapshot) => {
      try {
        const fetchedMessages: Message[] = snapshot.docs.map((doc) => {
          const data = doc.data() as Omit<Message, "id" | "isMe">;

          if (!data.createdAt) {
            console.warn(
              `${strings.messagewithID} ${doc.id} ${strings.ismissingcreateat}`
            );
          }

          return {
            id: doc.id,
            ...data,
            isMe: data.sender === currentUserName,
          };
        });

        setMessages(fetchedMessages);

        if (!fetchedPhoto) {
          const otherMessage = fetchedMessages.find(
            (msg) => msg.sender !== currentUserName
          );

          if (otherMessage) {
            const userId = otherMessage.sender;
            setOtherUserName(userId);
            const photoUrl = await getUserProfile(userId);
            if (photoUrl) {
              setOtherUserPhotoUrl(photoUrl);
            }
            fetchedPhoto = true;
          }
        }
      } catch (error) {
        console.error(strings.errorfetchingmessage, error);
      }
    });

    return () => unsubscribe();
  }, [currentUserName]);

  useEffect(() => {
    console.log(strings.otherusername, otherUserName);
    if (otherUserName) {
    }
  }, [otherUserName]);

  const handleSendMessage = async (chatId: string) => {
    if (!inputText.trim()) return;

    try {
      const messagesRef = collection(db, "chats", chatId, "messages");

      await addDoc(messagesRef, {
        type: "text",
        sender: currentUserName,
        senderName: currentUserName,
        photoUrl: currentUserPhotoUrl ?? null,
        content: inputText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
        createdAt: Timestamp.now(),
      });

      setInputText("");
    } catch (error) {
      console.error(strings.firestoreerror, error);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    if (!item.content) {
      return null;
    }

    const messageStyle = item.isMe
      ? chatstyle.myMessage
      : chatstyle.otherMessage;
    const textColor = item.isMe
      ? chatstyle.myMessageText
      : chatstyle.otherMessageText;
    const containerAlign = item.isMe
      ? chatstyle.myContainer
      : chatstyle.otherContainer;

    return (
      <View style={[chatstyle.messageContainer, containerAlign]}>
        {!item.isMe && (
          <View style={chatstyle.senderInfoRow}>
            <View style={chatstyle.avatarNameContainer}>
              <Image
                source={item.photoUrl ? { uri: item.photoUrl } : defaultAvatar}
                style={chatstyle.senderAvatar}
              />
              <Text
                style={[
                  chatstyle.senderName,
                  { color: colors.colors.timenamechat },
                ]}
              >
                {item.senderName}
              </Text>
            </View>
            <Text
              style={[
                chatstyle.timeText,
                { color: colors.colors.timenamechat },
              ]}
            >
              {item.time}
            </Text>
          </View>
        )}

        {item.type === "text" && (
          <View style={messageStyle}>
            <Text style={[chatstyle.messageText, textColor]}>
              {item.content}
            </Text>
          </View>
        )}

        {item.type === "image" && item.content && (
          <View style={chatstyle.imageContainer}>
            <Image
              source={{ uri: item.content }}
              style={chatstyle.messageImage}
            />
          </View>
        )}

        {item.type === "audio" && (
          <View
            style={[
              chatstyle.audioContainer,
              item.isMe ? chatstyle.myMessage : chatstyle.otherMessage,
            ]}
          >
            <View style={chatstyle.audioBar}>
              <TouchableOpacity style={chatstyle.playButton}>
                <Image source={images.playIcon} style={chatstyle.playIcon} />
              </TouchableOpacity>
              <View style={chatstyle.waveformContainer}>
                <View style={chatstyle.waveform} />
              </View>
              <Text style={chatstyle.audioDuration}>{strings.audiotime}</Text>
            </View>
          </View>
        )}

        {item.isMe && (
          <View style={chatstyle.senderInfoRow}>
            <Text
              style={[
                chatstyle.timeText,
                { color: colors.colors.timenamechat },
              ]}
            >
              {item.time}
            </Text>
            <View style={chatstyle.avatarNameContainer}>
              <Text
                style={[
                  chatstyle.senderName,
                  { color: colors.colors.timenamechat },
                ]}
              >
                {item.senderName}
              </Text>
              <Image
                source={
                  currentUserPhotoUrl
                    ? { uri: currentUserPhotoUrl }
                    : images.face2
                }
                style={chatstyle.senderAvatar}
              />
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View
      style={[chatstyle.container, { backgroundColor: colors.colors.chatbg }]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={chatstyle.headerContainer}>
        <View style={chatstyle.header}>
          <TouchableOpacity
            style={chatstyle.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={images.leftarrow} style={chatstyle.leftarrowIcon} />
          </TouchableOpacity>
          <View style={chatstyle.headerTextContainer}>
            <Image
              source={
                otherUserPhotoUrl
                  ? { uri: `${otherUserPhotoUrl}?t=${new Date().getTime()}` }
                  : images.face1
              }
              style={chatstyle.avatar}
            />
            <View>
              <Text style={chatstyle.name}>{otherUserName}</Text>
              <Text style={chatstyle.status}>{strings.online}</Text>
            </View>
          </View>
        </View>
        <View style={chatstyle.headerRight}>
          <TouchableOpacity style={chatstyle.menuButton}>
            <Image source={images.threedots} style={chatstyle.leftarrowIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          chatstyle.chatContainer,
          { backgroundColor: colors.colors.chatbg },
        ]}
      >
        <View style={chatstyle.todayContainer}>
          <Text
            style={[chatstyle.todayLabel, { color: colors.colors.chatinput }]}
          >
            {strings.today}
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={chatstyle.messagesList}
        />

        <View
          style={[
            chatstyle.inputContainer,
            { backgroundColor: colors.colors.chatinput },
          ]}
        >
          <TouchableOpacity style={chatstyle.addButton}>
            <Image source={images.plusIcon} style={chatstyle.plusIcon} />
          </TouchableOpacity>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder={strings.typemessagehere}
            style={chatstyle.input}
            placeholderTextColor={Colors.creamywhite}
          />
          <View style={chatstyle.actionButtons}>
            <TouchableOpacity style={chatstyle.micButton}>
              <Image source={images.micIcon} style={chatstyle.micIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={chatstyle.sendButton}
              onPress={() => handleSendMessage("chatId")}
            >
              <Image source={images.sendIcon} style={chatstyle.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
