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
import { db } from "../service/auth";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";

interface Message {
  id: string;
  type: "text" | "image" | "audio";
  sender: string;
  content?: string;
  time: string;
  isMe: boolean;
  createdAt?: Timestamp;
}

const ChatScreen = () => {
  const colors = useColors();
  const navigation = useNavigation();
  const { name: currentUserName } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [otherUserName, setOtherUserName] = useState<string | null>(null);
  const { statusBarStyle } = useTheme();

  const mockUsers = [strings.janesmith, strings.alicebrown];

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const fetchedMessages: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">),
      }));
      setMessages(fetchedMessages);

      if (!otherUserName) {
        const randomUser =
          mockUsers[Math.floor(Math.random() * mockUsers.length)];
        setOtherUserName(randomUser);
      }
    });

    return () => unsubscribe();
  }, [currentUserName, otherUserName]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    await addDoc(collection(db, "messages"), {
      type: "text",
      sender: currentUserName ?? strings.username,
      content: inputText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
      createdAt: Timestamp.now(),
    });

    setInputText("");
  };

  const renderMessage = ({ item }: { item: Message }) => {
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
              <Image source={images.face1} style={chatstyle.senderAvatar} />
              <Text
                style={[
                  chatstyle.senderName,
                  { color: colors.colors.textAccent },
                ]}
              >
                {item.sender}
              </Text>
            </View>
            <Text
              style={[chatstyle.timeText, { color: colors.colors.textAccent }]}
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
              style={[chatstyle.timeText, { color: colors.colors.textAccent }]}
            >
              {item.time}
            </Text>
            <View style={chatstyle.avatarNameContainer}>
              <Text
                style={[
                  chatstyle.senderName,
                  { color: colors.colors.textAccent },
                ]}
              >
                {item.sender}
              </Text>
              <Image source={images.face2} style={chatstyle.senderAvatar} />
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
            <Image source={images.face1} style={chatstyle.avatar} />
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
              onPress={handleSendMessage}
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
