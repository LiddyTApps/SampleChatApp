import React, { } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, FlatList, } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const chatsList = [
    {
        id: '1',
        image: require('../../assets/images/user_profile/user_1.jpg'),
        name: 'Ronan',
        time: '5m',
        withAttachment: false,
        message: 'Hello',
        isUnReadMessages: true,
        unReadMessagesCount: 3,
    },
    {
        id: '2',
        image: require('../../assets/images/user_profile/user_2.jpg'),
        name: 'Brayden',
        time: '14m',
        withAttachment: true,
        attactmentIconName: 'attach-file',
        isUnReadMessages: true,
        unReadMessagesCount: 8,
    },
    {
        id: '3',
        image: require('../../assets/images/user_profile/user_3.jpg'),
        name: 'Appolonia',
        time: '20m',
        withAttachment: true,
        attactmentIconName: 'contacts',
    },
    {
        id: '4',
        image: require('../../assets/images/user_profile/user_4.jpg'),
        name: 'Beatriz',
        time: '1d',
        message: 'Hello',
        isUnReadMessages: true,
        unReadMessagesCount: 6,
    },
    {
        id: '5',
        image: require('../../assets/images/user_profile/user_5.jpg'),
        name: 'Shira',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'attach-file',
    },
    {
        id: '6',
        image: require('../../assets/images/user_profile/user_6.jpg'),
        name: 'Diego',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'contacts',
    },
    {
        id: '7',
        image: require('../../assets/images/user_profile/user_7.jpg'),
        name: 'Macrco',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'attach-file',
    },
    {
        id: '8',
        image: require('../../assets/images/user_profile/user_8.jpg'),
        name: 'Steffan',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'contacts',
        isUnReadMessages: true,
        unReadMessagesCount: 2,
    },
];

const ChatScreen = ({ navigation }) => {

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push('messages/messagesScreen', { item: JSON.stringify(item) })}
            style={{ paddingHorizontal: Sizes.fixPadding + 5.0 }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={item.image}
                        style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                    />
                    <View style={{ maxWidth: width / 1.8, marginLeft: Sizes.fixPadding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...Fonts.blackColor16Medium }}>
                                {item.name}
                            </Text>
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.grayColor12Regular }}>
                                {item.time}
                            </Text>
                        </View>
                        {
                            item.withAttachment ?
                                <View style={{ marginTop: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name={item.attactmentIconName} size={17} color={Colors.grayColor} />
                                    <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.grayColor14Regular }}>
                                        You share a {item.attactmentIconName == 'contacts' ? `contact` : `file`}
                                    </Text>
                                </View>
                                :
                                <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.grayColor14Regular }}>
                                    {item.message}
                                </Text>
                        }
                    </View>
                </View>
                {item.isUnReadMessages ?
                    <View style={styles.unReadMessageCountWrapStyle}>
                        <Text style={{ ...Fonts.whiteColor14Regular }}>
                            {item.unReadMessagesCount}
                        </Text>
                    </View>
                    :
                    null
                }
            </View>
            {
                index == chatsList.length - 1
                    ?
                    null :
                    <View
                        style={{
                            backgroundColor: '#F0DBDB',
                            height: 1.0,
                            marginVertical: Sizes.fixPadding + 5.0
                        }}
                    />
            }
        </TouchableOpacity>
    )

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <View style={{ flex: 1, }}>
                {header()}
                {chats()}
                {messageFlatButton()}
            </View>
        </View>
    )

    function messageFlatButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('selectContact/selectContactScreen')}
                style={styles.messageFlatButtonWrapStyle}
            >
                <MaterialIcons
                    name="message"
                    size={27}
                    color={Colors.whiteColor}
                />
            </TouchableOpacity>
        )
    }

    function chats() {
        return (
            <FlatList
                data={chatsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: Sizes.fixPadding + 5.0,
                    paddingBottom: Sizes.fixPadding * 13.0,
                }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.whiteColor19Medium }}>
                    Chat
                </Text>
                <MaterialIcons
                    name="search"
                    color={Colors.whiteColor}
                    size={24}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColor,
        height: 56.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    unReadMessageCountWrapStyle: {
        width: 22.0,
        height: 22.0,
        borderRadius: 11.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageFlatButtonWrapStyle: {
        position: 'absolute',
        right: 20.0,
        bottom: 80.0,
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        elevation: 5.0,
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ChatScreen;