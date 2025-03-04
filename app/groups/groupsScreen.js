import React, { } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, FlatList, } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const groupsList = [
    {
        id: '1',
        image: require('../../assets/images/group/group1.jpg'),
        name: 'Ellison Family',
        time: '5m',
        withAttachment: false,
        message: 'Hello',
        messageSender: 'Ronan',
        isUnReadMessages: true,
        unReadMessagesCount: 3,
    },
    {
        id: '2',
        image: require('../../assets/images/group/group2.jpg'),
        name: 'My Sweet Family',
        time: '14m',
        withAttachment: false,
        message: 'Hello Ellison. Where are you?',
        messageSender: 'Dad',
        isUnReadMessages: true,
        unReadMessagesCount: 1,
    },
    {
        id: '3',
        image: require('../../assets/images/group/group3.jpg'),
        name: 'Best Friends Forever',
        time: '20m',
        withAttachment: false,
        message: 'That\'s so funny.',
        messageSender: 'John',
        isUnReadMessages: false,
    },
    {
        id: '4',
        image: require('../../assets/images/group/group4.jpg'),
        name: 'Legend\'s Group',
        time: '1d',
        withAttachment: false,
        message: 'Hello',
        messageSender: 'You',
        isUnReadMessages: true,
        unReadMessagesCount: 6,
    },
    {
        id: '5',
        image: require('../../assets/images/group/group5.jpg'),
        name: 'Group of Unity',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'attach-file',
        attachmentSender: 'You',
        isUnReadMessages: false,
    },
    {
        id: '6',
        image: require('../../assets/images/group/group6.jpg'),
        name: 'Diego',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'contacts',
        attachmentSender: 'Peter',
        isUnReadMessages: false,
    },
    {
        id: '7',
        image: require('../../assets/images/group/group1.jpg'),
        name: 'Ellison Family',
        time: '5m',
        withAttachment: false,
        message: 'Hello',
        messageSender: 'Ronan',
        isUnReadMessages: true,
        unReadMessagesCount: 3,
    },
    {
        id: '8',
        image: require('../../assets/images/group/group2.jpg'),
        name: 'My Sweet Family',
        time: '14m',
        withAttachment: false,
        message: 'Hello Ellison. Where are you?',
        messageSender: 'Dad',
        isUnReadMessages: true,
        unReadMessagesCount: 1,
    },
    {
        id: '9',
        image: require('../../assets/images/group/group3.jpg'),
        name: 'Best Friends Forever',
        time: '20m',
        withAttachment: false,
        message: 'That\'s so funny.',
        messageSender: 'John',
        isUnReadMessages: false,
    },
    {
        id: '10',
        image: require('../../assets/images/group/group4.jpg'),
        name: 'Legend\'s Group',
        time: '1d',
        withAttachment: false,
        message: 'Hello',
        messageSender: 'You',
        isUnReadMessages: true,
        unReadMessagesCount: 6,
    },
    {
        id: '11',
        image: require('../../assets/images/group/group5.jpg'),
        name: 'Group of Unity',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'attach-file',
        attachmentSender: 'You',
        isUnReadMessages: false,
    },
    {
        id: '12',
        image: require('../../assets/images/group/group6.jpg'),
        name: 'Diego',
        time: '2d',
        withAttachment: true,
        attactmentIconName: 'contacts',
        attachmentSender: 'Peter',
        isUnReadMessages: false,
    },
];

const GroupsScreen = ({ navigation }) => {

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push('groupMessages/groupMessagesScreen', { item: JSON.stringify(item) })}
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
                                        {item.attachmentSender} share a {item.attactmentIconName == 'contacts' ? `contact` : `file`}
                                    </Text>
                                </View>
                                :
                                <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.grayColor14Regular }}>
                                    {item.messageSender}: {item.message}
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
                index == groupsList.length - 1
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
                {groupChats()}
                {groupAddFlatButton()}
            </View>
        </View>
    )

    function groupAddFlatButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('newGroup/newGroupScreen')}
                style={styles.messageFlatButtonWrapStyle}
            >
                <MaterialIcons
                    name="group-add"
                    size={27}
                    color={Colors.whiteColor}
                />
            </TouchableOpacity>
        )
    }

    function groupChats() {
        return (
            <FlatList
                data={groupsList}
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
                    Groups
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

export default GroupsScreen;