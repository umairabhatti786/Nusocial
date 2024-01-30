import { StyleSheet } from "react-native";
import { colors } from "../../config/Colors";

export const styles = StyleSheet.create({
  inputWrapper: (mB) => ({
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.color_A0A2B1,
    minHeight: 48,
    marginBottom: mB,
  }),
  inputLeftSide: (flex) => ({
    flex: flex,
  }),
  inputMiddleSide: (flex) => ({
    flex: flex,
  }),
  inputRightSide: (flex) => ({
    flex: flex,
    justifyContent: "center",
    alignItems: "center",
  }),
});
