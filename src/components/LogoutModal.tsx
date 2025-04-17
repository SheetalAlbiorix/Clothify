import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useColors } from "../hooks/useColors";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, shadowStyles, Spacing } from "./layout";
import { Fonts } from "./fonts";
import { strings } from "../utils/strings";

export const LogoutModal = ({ isVisible, onCancel, onLogout }: any) => {
  const colors = useColors();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: colors.colors.background,
              borderColor: colors.colors.borderColor,
            },
          ]}
        >
          <Text style={[styles.modalTitle, { color: colors.colors.text }]}>
            {strings.modallogout}
          </Text>
          <View style={styles.divider} />
          <Text style={[styles.modalText, { color: colors.colors.textAccent }]}>
            {strings.surelogout}
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>{strings.cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.logoutButton,
                { backgroundColor: colors.colors.circlularborder },
              ]}
              onPress={onLogout}
            >
              <Text style={styles.buttonText}>{strings.yeslogout}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    ...layout.flex_1,
    ...layout.justifyEnd,
    ...layout.itemsCenter,
    backgroundColor: Colors.transparentblack,
  },
  modalView: {
    ...borderStyles.wTop_1,
    borderTopColor: Colors.white,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...Spacing.padding_30,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...layout.fullWidth,
  },
  modalTitle: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
    ...Spacing.marginBottom_10,
  },
  modalText: {
    ...Spacing.marginBottom_15,
    ...Fonts.size_16,
  },
  buttonsContainer: {
    ...layout.row,
    ...layout.justifyAround,
    ...layout.fullWidth,
  },
  button: {
    ...borderStyles.rounded_30,
    ...Spacing.paddingVertical_12,
    ...Spacing.paddingHorizontal_15,
    ...shadowStyles.elevation,
    ...layout.minWidth_35,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  cancelButton: {
    backgroundColor: Colors.white,
    ...borderStyles.w_1,
    borderColor: Colors.darkcoffee,
    ...borderStyles.rounded_30,
    ...Spacing.paddingVertical_12,
    ...Spacing.paddingHorizontal_15,
    ...shadowStyles.elevation,
    ...layout.minWidth_35,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  logoutButton: {
    backgroundColor: Colors.darkcoffee,
  },
  buttonText: {
    color: Colors.white,
    ...Fonts.weight_900,
    ...Fonts.size_16,
  },
  cancelText: {
    color: Colors.brown,
    ...Fonts.weight_900,
    ...Fonts.size_16,
  },
  divider: {
    ...Spacing.marginVertical_20,
    ...borderStyles.wBottom_1,
    borderBottomColor: Colors.mediumgrey,
    ...layout.width_350,
  },
});
