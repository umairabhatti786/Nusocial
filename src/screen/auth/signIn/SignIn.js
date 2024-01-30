import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./SignIn.style";
import { assets } from "../../../config/Images";
import Input from "../../../components/input/Input";
import { labels } from "../../../config/Labels";
import Button from "../../../components/button/Button";
import { colors } from "../../../config/Colors";

const SignIn = () => {
  // All States Define Here
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    alert("Press one");
  };
  const handleSignUp = () => {
    alert("Press two");
  };
  const pressOnForgot = () => {
    alert("Press three");
  };

  const handleEyeAction = (state) => (setState) => () => {
    setState(!state);
  };

  return (
    <View style={styles.signInWrapper}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={assets.appLogo}
          resizeMode="contain"
          style={styles.appLogo}
        />
        <Input placeholder={labels.enterEmail} inputStyle={styles.inputStyle} />
        <Input
          placeholder={labels.enterPasswprd}
          inputStyle={styles.inputStyle}
          rightImage={assets.eyeOff}
          secureTextEntry={secureTextEntry}
          rightPress={handleEyeAction(secureTextEntry)(setSecureTextEntry)}
        />
        <Text style={styles.forgotText} onPress={pressOnForgot}>
          {labels.forgotPassword}
        </Text>
        <Button
          onPress={handleSubmit}
          buttonBg={colors.color_E8FE90}
          color={colors.color_45495C}
        />
        <Button title={labels.imBrowserOffnen} onPress={handleSignUp} />
      </ScrollView>
    </View>
  );
};

export default SignIn;
