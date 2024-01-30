import React, { memo, useCallback } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./Button.style";
import { colors } from "../../config/Colors";
import { labels } from "../../config/Labels";

const Button = ({
  onPress = () => {},
  title = labels.einloggen,
  buttonBg = colors.color_23263A,
  borderWidth = 0,
  borderColor = colors.color_23263A,
  color = colors.white,
  buttonWidth = "100%",
  buttonHeight = 48,
  borderRadius = 8,
  mB = 15,
}) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <Pressable
      onPress={handlePress}
      style={styles.buttonWrapper(
        buttonBg,
        borderWidth,
        borderColor,
        buttonWidth,
        buttonHeight,
        borderRadius,
        mB
      )}
    >
      <Text style={styles.buttonTitle(color)}>{title}</Text>
    </Pressable>
  );
};

export default memo(Button);
