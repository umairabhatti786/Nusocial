import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../../../components/ScreenLayout'
import CustomMenu from '../../../components/CustomMenu'
import { colors } from '../../../utils/colors'
import CustomSearch from '../../../components/CustomSearch'
import CustomText from '../../../components/CustomText'
import { font } from '../../../utils/font'
import { images } from '../../../assets'
import { trendingBlog } from '../../../utils/Data'
import CustomView from '../../../components/CustomView'
import HomeModal from '../../../components/HomeModal'
type Props = {
    navigation?: any
}

const Home = ({ navigation }: Props) => {
    return (
        <ScreenLayout style={{}} >
            <View style={styles.container}>

                <CustomMenu
                    isLiveChat
                    onPressLiveChat={() => {
                        navigation.navigate("LiveChat")
                    }}
                    text='All Block'
                    navigation={navigation}
                />
                <CustomSearch
                    style={{ marginTop: "5%" }}
                    onChangeText={(x: any) => {
                        console.log(x);
                    }}
                    onSearch={() => {
                        console.log("ONSEARCH");
                    }}
                />
                <CustomText
                    text={"Trending Blocks"}
                    fontFam={font.poppins}
                    weight={700}
                    size={20}
                    color={colors.primary}
                    style={{ marginTop: "8%", marginLeft: 10 }}
                />
                <FlatList
                    data={trendingBlog}
                    style={{
                        flex: 1,
                    }}
                    scrollEnabled={false}
                    keyExtractor={(item,index) => index.toString()}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignContent: "center",
                        gap: 10,
                        marginTop: 20
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("Profile", { item: item })
                                }}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingVertical: 2,
                                    marginHorizontal: 12
                                }}
                            >
                                <Image
                                    source={item?.image}
                                    style={{
                                        width: 94,
                                        height: 94,
                                        resizeMode: "cover",
                                        borderRadius: 60
                                    }}
                                />
                                <CustomText
                                    text={item.title}
                                    weight={800}
                                    size={12}
                                    fontFam='Arial'
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                    color={colors.white}
                                />
                                <CustomText
                                    text={"+"}
                                    weight={800}
                                    size={30}
                                    fontFam='Arial'
                                    color={colors.primary}
                                    lineHeight={30}
                                />
                            </Pressable>
                        )
                    }}
                />
            </View>
        </ScreenLayout >
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },

})