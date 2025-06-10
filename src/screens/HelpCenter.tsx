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
import Data from "../utils/Data.json";
import type {
  ContactItem as ContactItemType,
  FaqItem as FaqItemType,
} from "../types/types";

const TABS = { FAQ: "FAQ", CONTACT_US: "Contact Us" };

const faqData: FaqItemType[] = Data.Faqs.map((item) => ({
  ...item,
  question:
    strings[`question${item.id}` as keyof typeof strings] || item.question,
  answer: strings[`answer${item.id}` as keyof typeof strings] || item.answer,
}));

const contactOptions: ContactItemType[] = Data.contacts.map((item) => ({
  ...item,
  title:
    strings[item.title.replace("strings.", "") as keyof typeof strings] ||
    item.title,
  phone: item.phone
    ? strings[item.phone.replace("strings.", "") as keyof typeof strings] ||
      item.phone
    : undefined,
  icon: images[item.icon as keyof typeof images],
}));

const FAQ_CATEGORIES = Data.faqCategory.map(
  (key) => strings[key as keyof typeof strings] || key
);

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
