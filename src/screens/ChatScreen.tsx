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
} from "firebase/firestore";
import { db, getUserProfilePhoto } from "../service/auth";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";
import { Message } from "../types/types";
import Header from "../components/HeaderGlobal";
import ChatMessage from "../components/ChatRenderItem";

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
            const photoUrl = await getUserProfilePhoto(userId);
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

  return (
    <View
      style={[chatstyle.container, { backgroundColor: colors.colors.chatbg }]}
    >
      <StatusBar style={statusBarStyle} />
      <Header
        type="chat"
        otherUserPhotoUrl={otherUserPhotoUrl}
        otherUserName={otherUserName}
        onBackPress={() => navigation.goBack()}
        onChatMenuPress={() => console.log(strings.chatmenupressed)}
      />

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
          renderItem={({ item }) => <ChatMessage message={item} />}
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
