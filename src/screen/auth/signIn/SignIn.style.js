import { StyleSheet } from "react-native";
import { colors } from "../../../config/Colors";
import { font } from "../../../utils/font";

export const styles = StyleSheet.create({
  signInWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
  },
  forgotText: {
    fontSize: 14,
    fontFamily: font.poppins,
    fontWeight: "600",
    color: colors.color_717D03,
    marginBottom: 50,
  },
  appLogo: {
    alignSelf: "center",
    marginBottom: 50,
  },
  inputStyle: {
    fontSize: 14,
    color: colors.black,
  },
});
