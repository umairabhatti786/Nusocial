import React, { memo } from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import { styles } from "./Input.style";

const Input = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  editable,
  secureTextEntry,
  leftImage,
  rightImage,
  leftPress = () => {},
  rightPress = () => {},
  mB = 10,
  inputStyle = "",
}) => {
  return (
    <View style={styles.inputWrapper(mB)}>
      {leftImage && (
        <View style={styles.inputLeftSide(leftImage ? 0.1 : 0)}>
          <Pressable onPress={leftPress}>
            <Image source={leftImage} resizeMode="contain" />
          </Pressable>
        </View>
      )}
      <View
        style={styles.inputMiddleSide(
          leftImage || leftImage ? 0.9 : leftImage && rightImage ? 0.8 : 1
        )}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={editable}
          secureTextEntry={secureTextEntry}
          style={inputStyle}
        />
      </View>
      {rightImage && (
        <View style={styles.inputRightSide(rightImage ? 0.1 : 0)}>
          <Pressable onPress={rightPress}>
            <Image source={rightImage} resizeMode="contain" />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default memo(Input);
