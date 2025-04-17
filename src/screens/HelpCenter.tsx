import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Colors } from "../utils/Colors";

type HelpcenterNavigationProp = StackNavigationProp<
  RootStackParamList,
  "helpcenter"
>;

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

const TABS = {
  FAQ: "FAQ",
  CONTACT_US: "Contact Us",
};

const FAQ_CATEGORIES = [strings.All, strings.services, strings.general, strings.account];

const HelpCenter = () => {
  const colors = useColors();
  const navigation = useNavigation<HelpcenterNavigationProp>();
  const [activeTab, setActiveTab] = useState(TABS.FAQ);
  const [activeCategory, setActiveCategory] = useState(strings.All);
  const [faqs, setFaqs] = useState<FaqItem[]>(faqData);
  const [contacts, setContacts] = useState<ContactItem[]>(contactOptions);

  const toggleFaqExpanded = (id: string) => {
    const updatedFaqs = faqs.map((faq) => ({
      ...faq,
      expanded: faq.id === id ? !faq.expanded : faq.expanded,
    }));
    setFaqs(updatedFaqs);
  };

  const toggleContactExpanded = (id: string) => {
    const updatedContacts = contacts.map((contact) => ({
      ...contact,
      expanded: contact.id === id ? !contact.expanded : contact.expanded,
    }));
    setContacts(updatedContacts);
  };

  type RenderItemInfo = {
    item: FaqItem;
  };

  type RenderContactInfo = {
    item: ContactItem;
  };

  const renderFaqItem = ({ item }: RenderItemInfo) => (
    <TouchableOpacity
      style={helpcenterstyle.faqItem}
      onPress={() => toggleFaqExpanded(item.id)}
    >
      <View style={helpcenterstyle.faqQuestion}>
        <Text style={helpcenterstyle.questionText}>{item.question}</Text>
        <Image
          source={item.expanded ? images.arrowUp : images.downarrow}
          style={helpcenterstyle.arrowIcon}
        />
      </View>
      {item.expanded && (
        <Text style={helpcenterstyle.answerText}>{item.answer}</Text>
      )}
    </TouchableOpacity>
  );

  const renderContactItem = ({ item }: RenderContactInfo) => (
    <TouchableOpacity
      style={helpcenterstyle.contactItem}
      onPress={() => toggleContactExpanded(item.id)}
    >
      <View style={helpcenterstyle.contactHeader}>
        <Image source={item.icon} style={helpcenterstyle.contactIcon} />
        <Text style={helpcenterstyle.contactTitle}>{item.title}</Text>
        <Image
          source={item.expanded ? images.arrowUp : images.downarrow}
          style={helpcenterstyle.arrowIcon}
        />
      </View>
      {item.expanded && item.phone && (
        <View style={helpcenterstyle.contactDetail}>
          <View style={helpcenterstyle.contactPhoneContainer}>
            <View style={helpcenterstyle.contactBullet} />
            <Text style={helpcenterstyle.contactPhone}>{item.phone}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderContent = () => {
    switch (activeTab) {
      case TABS.FAQ:
        return (
          <View style={helpcenterstyle.faqContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={helpcenterstyle.categoriesContainer}
            >
              {FAQ_CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    helpcenterstyle.categoryButton,
                    activeCategory === category &&
                      helpcenterstyle.activeCategoryButton,
                  ]}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    style={[
                      helpcenterstyle.categoryText,
                      activeCategory === category &&
                        helpcenterstyle.activeCategoryText,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <FlatList
              data={faqs}
              renderItem={renderFaqItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={helpcenterstyle.faqList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
      case TABS.CONTACT_US:
        return (
          <View style={helpcenterstyle.contactContainer}>
            <FlatList
              data={contacts}
              renderItem={renderContactItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={helpcenterstyle.contactList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        helpcenterstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={helpcenterstyle.headerContainer}>
        <TouchableOpacity
          style={helpcenterstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={helpcenterstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[helpcenterstyle.header, { color: colors.colors.text }]}>
          {strings.helpcenter}
        </Text>
      </View>

      <View style={helpcenterstyle.searchContainer}>
        <View style={helpcenterstyle.searchview}>
          <Image
            source={images.searchIcon}
            style={helpcenterstyle.searchIcon}
          />
          <TextInput
            style={helpcenterstyle.input}
            placeholder={strings.search}
            placeholderTextColor={Colors.mediumgrey}
          />
        </View>
      </View>

      <View style={helpcenterstyle.tabContainer}>
        <TouchableOpacity
          style={[
            helpcenterstyle.tabButton,
            activeTab === TABS.FAQ && helpcenterstyle.activeTabButton,
          ]}
          onPress={() => setActiveTab(TABS.FAQ)}
        >
          <Text
            style={[
              helpcenterstyle.tabText,
              activeTab === TABS.FAQ && helpcenterstyle.activeTabText,
            ]}
          >
            {TABS.FAQ}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            helpcenterstyle.tabButton,
            activeTab === TABS.CONTACT_US && helpcenterstyle.activeTabButton,
          ]}
          onPress={() => setActiveTab(TABS.CONTACT_US)}
        >
          <Text
            style={[
              helpcenterstyle.tabText,
              activeTab === TABS.CONTACT_US && helpcenterstyle.activeTabText,
            ]}
          >
            {TABS.CONTACT_US}
          </Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
};

export default HelpCenter;
