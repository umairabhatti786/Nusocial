import { StyleSheet } from "react-native";
import { colors } from "../../config/Colors";
import { font } from "../../utils/font";

export const styles = StyleSheet.create({
  buttonWrapper: (
    backgroundColor,
    borderWidth,
    borderColor,
    width,
    height,
    borderRadius,
    mB
  ) => ({
    backgroundColor: backgroundColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    width: width,
    height: height,
    borderRadius: borderRadius,
    marginBottom: mB,
    justifyContent: "center",
    alignItems: "center",
  }),
  buttonTitle: (color) => ({
    fontSize: 16,
    fontFamily: font.poppins,
    fontWeight: "600",
    color: color,
  }),
});
