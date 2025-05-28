import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";

interface TabsHelpProps {
  activeTab: string;
  tabs: { key: string; label: string }[];
  onTabSelect: (key: string) => void;
}

export const TabsHelp: React.FC<TabsHelpProps> = ({
  activeTab,
  tabs,
  onTabSelect,
}) => (
  <View style={helpcenterstyle.tabContainer}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab.key}
        style={[
          helpcenterstyle.tabButton,
          activeTab === tab.key && helpcenterstyle.activeTabButton,
        ]}
        onPress={() => onTabSelect(tab.key)}
      >
        <Text
          style={[
            helpcenterstyle.tabText,
            activeTab === tab.key && helpcenterstyle.activeTabText,
          ]}
        >
          {tab.label}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
