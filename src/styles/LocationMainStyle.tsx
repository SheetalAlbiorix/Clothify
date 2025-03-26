import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const locationmainstyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        right: 60,
        top: 30
      },
      backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.mediumbrown,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backIcon: {
        width: 20,
        height: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.mediumgrey,
        backgroundColor: Colors.white,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginTop: 60,
      },
      searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
      },
      closeIcon: {
        width: 20,
        height: 20,
      },
      currentLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      locationIcon: {
        width: 20,
        height: 20,
        tintColor: '#754D29',
        marginRight: 10,
      },
      currentLocationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      searchResultTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999',
        marginTop: 20,
      },
      searchResultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      resultIcon: {
        width: 20,
        height: 20,
        tintColor: '#754D29',
        marginRight: 10,
      },
      resultTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      resultSubtitle: {
        fontSize: 14,
        color: '#999',
      },
});