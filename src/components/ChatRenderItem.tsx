import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { chatstyle } from "../styles/ChatStyle";
import { Message } from "../types/types";
import { useColors } from "../hooks/useColors";
import { useUser } from "../hooks/userContext";
import { images } from "../utils/images";
import { strings } from "../utils/strings";

type Props = {
  message: Message;
};

const ChatMessage: React.FC<Props> = ({ message }) => {
  const colors = useColors();
  const { photoUrl: currentUserPhotoUrl } = useUser();

  if (!message.content) return null;

  const messageStyle = message.isMe
    ? chatstyle.myMessage
    : chatstyle.otherMessage;
  const textColor = message.isMe
    ? chatstyle.myMessageText
    : chatstyle.otherMessageText;
  const containerAlign = message.isMe
    ? chatstyle.myContainer
    : chatstyle.otherContainer;

  const defaultAvatar = images.face1;

  return (
    <View style={[chatstyle.messageContainer, containerAlign]}>
      {!message.isMe && (
        <View style={chatstyle.senderInfoRow}>
          <View style={chatstyle.avatarNameContainer}>
            <Image
              source={
                message.photoUrl ? { uri: message.photoUrl } : defaultAvatar
              }
              style={chatstyle.senderAvatar}
            />
            <Text
              style={[
                chatstyle.senderName,
                { color: colors.colors.timenamechat },
              ]}
            >
              {message.senderName}
            </Text>
          </View>
          <Text
            style={[chatstyle.timeText, { color: colors.colors.timenamechat }]}
          >
            {message.time}
          </Text>
        </View>
      )}

      {message.type === "text" && (
        <View style={messageStyle}>
          <Text style={[chatstyle.messageText, textColor]}>
            {message.content}
          </Text>
        </View>
      )}

      {message.type === "image" && message.content && (
        <View style={chatstyle.imageContainer}>
          <Image
            source={{ uri: message.content }}
            style={chatstyle.messageImage}
          />
        </View>
      )}

      {message.type === "audio" && (
        <View
          style={[
            chatstyle.audioContainer,
            message.isMe ? chatstyle.myMessage : chatstyle.otherMessage,
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

      {message.isMe && (
        <View style={chatstyle.senderInfoRow}>
          <Text
            style={[chatstyle.timeText, { color: colors.colors.timenamechat }]}
          >
            {message.time}
          </Text>
          <View style={chatstyle.avatarNameContainer}>
            <Text
              style={[
                chatstyle.senderName,
                { color: colors.colors.timenamechat },
              ]}
            >
              {message.senderName}
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

export default ChatMessage;
