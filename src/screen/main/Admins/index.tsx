import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../../../components/ScreenLayout'
import { colors } from '../../../utils/colors'
import CustomText from '../../../components/CustomText'
import Checkbox from '../../../components/CheckBox'
import CustomButton from '../../../components/CustomButton'
import CustomView from '../../../components/CustomView'
import { font } from '../../../utils/font'
import CustomInput2 from '../../../components/CustomInput2'
import CustomMenu2 from '../../../components/CustomMenu2'
type Props = {
    navigation?: any
}

const Admins = ({ navigation }: Props) => {

    return (
        <ScreenLayout style={{ paddingHorizontal: 40, paddingVertical: "15%" }} >
            <View style={{
                height: "100%"
            }}>
                <CustomMenu2
                    text='Admins'
                    navigation={navigation}
                />
                <View style={{
                    flex: 1
                }}>
                    <CustomInput2
                        placeholder='Showblock (Owner)'
                        onChangeText={(x: any) => {
                            console.log(x);
                        }}
                    />
                    <CustomInput2
                        placeholder='Add Controllers'
                        onChangeText={(x: any) => {
                            console.log(x);
                        }}
                    />
                    <CustomInput2
                        placeholder='Website (Optional)'
                        onChangeText={(x: any) => {
                            console.log(x);
                        }}
                    />
                    <CustomInput2
                        placeholder='Block Name'
                        onChangeText={(x: any) => {
                            console.log(x);
                        }}
                    />
                    <CustomInput2
                        style={{ textAlignVertical: "top", paddingHorizontal: 5, paddinVertical: 15 }}
                        height={150}
                        placeholder='Add Bio'
                        onChangeText={(x: any) => {
                            console.log(x, "x");

                        }}
                        multiline={true}
                    />
                </View>
                <View style={{
                    width: '100%',
                    marginTop: 100,
                }}>
                    <CustomButton
                        width={"90%"}
                        text='Continue'
                        borderRadius={39}
                        style={{
                            alignSelf: "center"
                        }}
                    />
                </View>
            </View>
        </ScreenLayout >
    )
}

export default Admins
const styles = StyleSheet.create({
    root: { justifyContent: "center", gap: 44 },
    codeFieldRoot: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 12,
        height: 100,
        borderColor: "#092F7459",
    },
    cell: {
        fontSize: 24,
        fontFamily: font.poppins,
        color: colors.primary
    },
    focusCell: {
        borderColor: "#092F7459",
    },
})