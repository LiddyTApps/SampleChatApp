import React, { useState } from "react";
import { View, Text, ScrollView, Image, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import MyStatusBar from "../../components/myStatusBar";
import { Snackbar } from "react-native-paper";
import { useLocalSearchParams, useNavigation } from "expo-router";

const sharedMediaList = [
    {
        id: '1',
        media: require('../../assets/images/hotel/hotel_1.jpg'),
    },
    {
        id: '2',
        media: require('../../assets/images/hotel/hotel_2.jpg'),
    },
    {
        id: '3',
        media: require('../../assets/images/hotel/hotel_3.jpg'),
    },
    {
        id: '4',
        media: require('../../assets/images/hotel/hotel_4.jpg'),
    },
    {
        id: '5',
        media: require('../../assets/images/hotel/hotel_5.jpg'),
    },
    {
        id: '6',
        media: require('../../assets/images/hotel/hotel_6.jpg'),
    },
    {
        id: '7',
        media: require('../../assets/images/hotel/hotel_7.jpg'),
    },
];

const ChatDetailScreen = () => {

    const navigation = useNavigation();

    var { item } = useLocalSearchParams();
    item = JSON.parse(item);

    const [showOptions, setshowOptions] = useState(false);
    const [showToast, setshowToast] = useState(false);
    const [toastMsg, settoastMsg] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
                    {userInfo()}
                    {sharedMediaInfo()}
                    {phoneNumberInfo()}
                    {blockInfo()}
                    {reportContactInfo()}
                </ScrollView>
            </View>
            {toastMessageInfo()}
        </View>
    )

    function toastMessageInfo() {
        return (
            <Snackbar
                visible={showToast}
                onDismiss={() => { setshowToast(false) }}
                elevation={0}
                duration={2000}
                style={{ backgroundColor: 'transparent' }}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.toastMessage}>
                        {toastMsg}
                    </Text>
                </View>
            </Snackbar>
        )
    }

    function reportContactInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    settoastMsg('Report Contact');
                    setshowToast(true);
                }}
                style={styles.reportContactInfoWrapStyle}
            >
                <MaterialIcons name="thumb-down" size={24} color={Colors.redColor} />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.redColor16Regular }}>
                    Report contact
                </Text>
            </TouchableOpacity>
        )
    }

    function blockInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    settoastMsg('Block');
                    setshowToast(true);
                }}
                style={styles.blockInfoWrapStyle}
            >
                <MaterialIcons name="block" size={24} color={Colors.redColor} />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.redColor16Regular }}>
                    Block
                </Text>
            </TouchableOpacity>
        )
    }

    function phoneNumberInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, backgroundColor: Colors.whiteColor, padding: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Phone Number
                </Text>
                <View style={styles.phoneNumberInfoWrapStyle}>
                    <View style={{ marginTop: Sizes.fixPadding }}>
                        <Text style={{ ...Fonts.blackColor15Regular }}>
                            +1 123456
                        </Text>
                        <Text style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.grayColor14Regular }}>
                            Mobile
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons
                            name="message"
                            color={Colors.primaryColor}
                            size={24}
                            onPress={() => navigation.pop()}
                        />
                        <MaterialIcons
                            name="phone"
                            color={Colors.primaryColor}
                            size={24}
                            style={{ marginHorizontal: Sizes.fixPadding + 10.0, }}
                            onPress={() => navigation.push('calling/callingScreen', { item: JSON.stringify(item) })}
                        />
                        <MaterialIcons
                            name="videocam"
                            color={Colors.primaryColor}
                            size={24}
                            onPress={() => navigation.push('videoCalling/videoCallingScreen', { item: JSON.stringify(item) })}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function sharedMediaInfo() {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => index == sharedMediaList.length - 1 ? null : navigation.push('mediaFullView/mediaFullViewScreen', { item: JSON.stringify(item) })}
            >
                <ImageBackground
                    source={item.media}
                    style={{ width: 80.0, height: 80.0, marginHorizontal: Sizes.fixPadding - 5.0 }}
                >
                    {
                        index == sharedMediaList.length - 1 ?
                            <View style={styles.mediaImageShadowStyle}>
                                <Text style={{ ...Fonts.whiteColor14Regular }}>
                                    View all
                                </Text>
                            </View>
                            :
                            null
                    }
                </ImageBackground>
            </TouchableOpacity>
        )
        return (
            <View style={{ marginBottom: Sizes.fixPadding, paddingVertical: Sizes.fixPadding + 10.0, backgroundColor: Colors.whiteColor }}>
                <Text style={{ paddingHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Medium }}>
                    Shared Media
                </Text>
                <FlatList
                    horizontal
                    data={sharedMediaList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingTop: Sizes.fixPadding + 5.0,
                        paddingHorizontal: Sizes.fixPadding + 5.0
                    }}
                />
            </View>
        )
    }

    function userInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, paddingVertical: Sizes.fixPadding + 10.0, backgroundColor: Colors.whiteColor }}>
                <Image
                    source={item.image}
                    style={styles.userImageStyle}
                />
                <View style={styles.userAboutWrapStyle}>
                    <Text style={{ textAlign: 'center', ...Fonts.blackColor16Medium }}>
                        "All our dreams can come true, if we have the courage to pursue them."
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color={Colors.whiteColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ ...Fonts.whiteColor19Medium }}>
                    {item.name}
                </Text>
                <Menu
                    visible={showOptions}
                    anchor={
                        <MaterialIcons
                            name="more-vert"
                            size={24}
                            color={Colors.whiteColor}
                            onPress={() => setshowOptions(true)}
                        />
                    }
                    onRequestClose={() => setshowOptions(false)}
                >
                    <View style={{ marginTop: Sizes.fixPadding }}>
                        <MenuItem
                            textStyle={{ ...Fonts.blackColor16Regular }}
                            onPress={() => {
                                setshowOptions(false)
                                settoastMsg('Report');
                                setshowToast(true);
                            }}
                        >
                            Report
                        </MenuItem>
                        <MenuItem
                            textStyle={{ marginTop: Sizes.fixPadding - 20.0, ...Fonts.blackColor16Regular }}
                            onPress={() => {
                                setshowOptions(false)
                                settoastMsg('Block');
                                setshowToast(true);
                            }}
                        >
                            Block
                        </MenuItem>
                    </View>
                </Menu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: Sizes.fixPadding - 5.0,
        paddingRight: Sizes.fixPadding + 5.0,
        backgroundColor: Colors.primaryColor,
        height: 56.0,
    },
    phoneNumberInfoWrapStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Sizes.fixPadding + 5.0,
    },
    mediaImageShadowStyle: {
        backgroundColor: 'rgba(0,0,0,0.70)',
        width: 80.0,
        height: 80.0,
        marginRight: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockInfoWrapStyle: {
        marginBottom: Sizes.fixPadding,
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: Sizes.fixPadding * 2.0,
    },
    reportContactInfoWrapStyle: {
        marginBottom: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: Sizes.fixPadding * 2.0,
    },
    userAboutWrapStyle: {
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        elevation: 2.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        marginTop: Sizes.fixPadding + 2.0,
        ...CommonStyles.shadow
    },
    userImageStyle: {
        width: 130.0,
        height: 130.0,
        borderRadius: 65.0,
        alignSelf: 'center',
    },
    toastMessage: {
        ...Fonts.whiteColor14Regular,
        backgroundColor: '#333333',
        textAlign: 'center',
        paddingHorizontal: Sizes.fixPadding + 10.0,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding * 2.0,
        overflow: 'hidden',
    }
})

export default ChatDetailScreen;