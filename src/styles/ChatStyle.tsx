import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { layout, Spacing } from "../components/layout";

export const chatstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    backgroundColor: Colors.iconColor,
    ...Spacing.paddingHorizontal_15,
    paddingTop: 50,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    justifyContent: "center",
  },
  headerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  status: {
    color: "#E0E0E0",
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  leftarrowIcon: {
    width: 20,
    height: 20,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -30,
  },
  todayContainer: {
    marginTop: 10,
  },
  todayLabel: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
  },
  messagesList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  messageContainer: {
    marginVertical: 8,
    maxWidth: "85%",
  },
  myContainer: {
    alignSelf: "flex-end",
  },
  otherContainer: {
    alignSelf: "flex-start",
  },
  senderInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  senderAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  senderName: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#616161",
  },
  myMessage: {
    backgroundColor: "#795548",
    padding: 15,
    borderRadius: 15,
  },
  otherMessage: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  myMessageText: {
    color: "#FFFFFF",
  },
  otherMessageText: {
    color: "#424242",
  },
  timeContainer: {
    marginTop: 5,
  },
  timeLeft: {
    alignSelf: "flex-start",
  },
  timeRight: {
    alignSelf: "flex-end",
  },
  timeText: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  imageContainer: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  messageImage: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  audioContainer: {
    padding: 12,
    borderRadius: 15,
    width: 250,
  },
  audioBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  waveformContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  waveform: {
    height: 20,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  audioDuration: {
    color: "#FFFFFF",
    fontSize: 13,
    marginLeft: 10,
  },
  addButton: {
    padding: 5,
    marginRight: 5,
  },
  playIcon: {
    padding: 10,
    borderRadius: 30,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    tintColor: Colors.white,
  },
  senderInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 2,
  },
  avatarNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  micIcon: {
    width: 25,
    height: 25,
  },
  actionButtons: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: Colors.dullChocolate,
    padding: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: Colors.dullcoffee,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: Colors.lightWhite,
    fontSize: 16,
  },
  micButton: {
    backgroundColor: Colors.lightmocha,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.lightmocha,
  },
  sendButton: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  sendIcon: {
    width: 48,
    height: 48,
    tintColor: Colors.lightmocha,
  },
});
