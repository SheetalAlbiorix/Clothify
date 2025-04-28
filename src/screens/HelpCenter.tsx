import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { FaqItem } from "../components/FaqItem";
import { ContactItem } from "../components/ContactItem";
import { CategoryTabs } from "../components/CategoryTabs";
import { TabsHelp } from "../components/TabsHelp";
import { HelpCenterHeader } from "../components/HelpcenterHeader";
import { SearchBar } from "../components/SearchBar";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import { strings } from "../utils/strings";
import { images } from "../utils/images";

const TABS = { FAQ: "FAQ", CONTACT_US: "Contact Us" };

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  expanded: boolean;
}

interface ContactItem {
  id: string;
  title: string;
  icon: any;
  phone?: string;
  expanded: boolean;
}

const faqData: FaqItem[] = [
  {
    id: "1",
    question: strings.question1,
    answer: strings.answer1,
    expanded: true,
  },
  {
    id: "2",
    question: strings.question2,
    answer: strings.answer2,
    expanded: false,
  },
  {
    id: "3",
    question: strings.question3,
    answer: strings.answer3,
    expanded: false,
  },
  {
    id: "4",
    question: strings.question4,
    answer: strings.answer4,
    expanded: false,
  },
  {
    id: "5",
    question: strings.question5,
    answer: strings.answer5,
    expanded: false,
  },
  {
    id: "6",
    question: strings.question6,
    answer: strings.answer6,
    expanded: false,
  },
  {
    id: "7",
    question: strings.question7,
    answer: strings.answer7,
    expanded: false,
  },
];

const contactOptions: ContactItem[] = [
  {
    id: "1",
    title: strings.contactoption1,
    icon: images.headphones,
    expanded: false,
  },
  {
    id: "2",
    title: strings.contactoption2,
    icon: images.whatsapp,
    phone: strings.phone,
    expanded: true,
  },
  {
    id: "3",
    title: strings.contactoption3,
    icon: images.globe,
    expanded: false,
  },
  {
    id: "4",
    title: strings.contactoption4,
    icon: images.metaIcon,
    expanded: false,
  },
  {
    id: "5",
    title: strings.contactoption5,
    icon: images.twitter,
    expanded: false,
  },
  {
    id: "6",
    title: strings.contactoption6,
    icon: images.instagram,
    expanded: false,
  },
];

const FAQ_CATEGORIES = [
  strings.All,
  strings.services,
  strings.general,
  strings.account,
];

const HelpCenter = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();

  const [activeTab, setActiveTab] = useState(TABS.FAQ);
  const [activeCategory, setActiveCategory] = useState(strings.All);
  const [faqs, setFaqs] = useState(faqData);
  const [contacts, setContacts] = useState(contactOptions);

  const toggleFaqExpanded = (id: string) => {
    setFaqs((prev) =>
      prev.map((faq) => ({
        ...faq,
        expanded: faq.id === id ? !faq.expanded : faq.expanded,
      }))
    );
  };

  const toggleContactExpanded = (id: string) => {
    setContacts((prev) =>
      prev.map((contact) => ({
        ...contact,
        expanded: contact.id === id ? !contact.expanded : contact.expanded,
      }))
    );
  };

  const renderContent = () => {
    if (activeTab === TABS.FAQ) {
      return (
        <View style={helpcenterstyle.faqContainer}>
          <CategoryTabs
            categories={FAQ_CATEGORIES}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
          <FlatList
            data={faqs}
            renderItem={({ item }) => (
              <FaqItem {...item} onToggle={toggleFaqExpanded} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={helpcenterstyle.faqList}
          />
        </View>
      );
    }
    if (activeTab === TABS.CONTACT_US) {
      return (
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <ContactItem {...item} onToggle={toggleContactExpanded} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={helpcenterstyle.contactList}
        />
      );
    }
    return null;
  };

  return (
    <View
      style={[
        helpcenterstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <HelpCenterHeader
        title={strings.helpcenter}
        textColor={colors.colors.text}
      />
      <SearchBar />
      <TabsHelp
        activeTab={activeTab}
        tabs={[
          { key: TABS.FAQ, label: "FAQ" },
          { key: TABS.CONTACT_US, label: "Contact Us" },
        ]}
        onTabSelect={setActiveTab}
      />
      {renderContent()}
    </View>
  );
};

export default HelpCenter;
