import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../utils/images";
import { chatstyle } from "../styles/ChatStyle";
import { Colors } from "../utils/Colors";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";

interface Message {
  id: number;
  type: "text" | "image" | "audio";
  sender: string;
  content?: string | any;
  time: string;
  isMe: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    type: "text",
    sender: strings.username,
    content: strings.messageText,
    time: strings.time804,
    isMe: false,
  },
  {
    id: 2,
    type: "text",
    sender: strings.estherhoward,
    content: strings.messageText,
    time: strings.time804,
    isMe: true,
  },
  {
    id: 3,
    type: "image",
    sender: strings.username,
    content: images.face1,
    time: strings.time804,
    isMe: false,
  },
  {
    id: 4,
    type: "audio",
    sender: strings.estherhoward,
    time: strings.time804,
    isMe: true,
  },
];

const ChatScreen = () => {
  const colors = useColors();
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

        {item.type === "image" && (
          <View style={chatstyle.imageContainer}>
            <Image source={images.chatbanner} style={chatstyle.messageImage} />
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
    <View style={chatstyle.container}>
      <View style={chatstyle.headerContainer}>
        <View style={chatstyle.header}>
          <TouchableOpacity style={chatstyle.backButton}>
            <Image source={images.leftarrow} style={chatstyle.leftarrowIcon} />
          </TouchableOpacity>
          <View style={chatstyle.headerTextContainer}>
            <Image source={images.face1} style={chatstyle.avatar} />
            <View>
              <Text style={chatstyle.name}>{strings.username}</Text>
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
          { backgroundColor: colors.colors.background },
        ]}
      >
        <View style={chatstyle.todayContainer}>
          <Text
            style={[chatstyle.todayLabel, { color: colors.colors.textAccent }]}
          >
            {strings.today}
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          data={messages}
          keyExtractor={(item) => item.id.toString()}
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
            placeholder={strings.typemessagehere}
            style={chatstyle.input}
            placeholderTextColor={Colors.creamywhite}
          />
          <View style={chatstyle.actionButtons}>
            <TouchableOpacity style={chatstyle.micButton}>
              <Image source={images.micIcon} style={chatstyle.micIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={chatstyle.sendButton}>
              <Image source={images.sendIcon} style={chatstyle.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
