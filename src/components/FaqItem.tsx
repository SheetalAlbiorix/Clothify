import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { images } from "../utils/images";

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, expanded, onToggle }) => (
  <TouchableOpacity style={helpcenterstyle.faqItem} onPress={() => onToggle(id)}>
    <View style={helpcenterstyle.faqQuestion}>
      <Text style={helpcenterstyle.questionText}>{question}</Text>
      <Image source={expanded ? images.arrowUp : images.downarrow} style={helpcenterstyle.arrowIcon} />
    </View>
    {expanded && <Text style={helpcenterstyle.answerText}>{answer}</Text>}
  </TouchableOpacity>
);
