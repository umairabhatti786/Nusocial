import React from 'react'
import { Pressable, Text, View, TextInput } from 'react-native'
import CustomText from '../CustomText'
import CustomView from '../CustomView'
import { colors } from '../../utils/colors'

type Props = {
    isVisible?: boolean
    navigation?: any
    setIsVisible?: any
}

const HomeModal = ({ isVisible, navigation, setIsVisible }: Props) => {
    const goTo = (x: any) => {
        setIsVisible(false);
        navigation.navigate(x)
    }
    return (
        isVisible &&
        <CustomView
            angles={130}
            outerStyle={{
                position: "absolute",
                top: 50,
                left: -25,
                zIndex: 50,
                justifyContent: "center",
                alignItems: "center",
            }}
            height={550}
            width={250}
            innerButtonStyle={{
                paddingTop: 30,
                paddingLeft: 25,
                gap: 15
            }}
        >
            <Pressable>
                <CustomText
                    text={"Guide"}
                    size={22}
                    weight={700}
                    color={colors.primary}
                    style={{ marginBottom: 30 }}
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    goTo("Profile")
                }}
            >
                <CustomText
                    text={"Profile"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable

                onPress={() => goTo("Admins")}>
                <CustomText
                    text={"Admins"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable
                onPress={() => goTo("InviteFriends")}
            >
                <CustomText
                    text={"Invite Friends"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable
                onPress={() => goTo("TermsConditions")}
            >
                <CustomText
                    text={"Privacy Policy"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable
                onPress={() => goTo("Home")}
            >
                <CustomText
                    text={"All Blocks"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable
                onPress={() => goTo("Settings")}
            >
                <CustomText
                    text={"Settings"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
            <Pressable
            onPress={() => goTo("Lock")}
            >
                <CustomText
                    text={"Lock"}
                    size={16}
                    weight={700}
                    fontFam='Arial'
                />
            </Pressable>
        </CustomView>
    )
}
export default HomeModal
