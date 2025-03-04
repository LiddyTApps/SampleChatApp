import React from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get('screen');

const contactsList = [
    {
        id: '1',
        image: require('../../assets/images/user_profile/user_1.jpg'),
        name: 'Ronan',
        about: 'Your limitation-it\'s only your imagination.'
    },
    {
        id: '2',
        image: require('../../assets/images/user_profile/user_2.jpg'),
        name: 'Braydenn',
        about: 'Push yourself.because no one else is going to do it for you.'
    },
    {
        id: '3',
        image: require('../../assets/images/user_profile/user_3.jpg'),
        name: 'Apollonia',
        about: 'Sometimes later becomes never.Do it now.'
    },
    {
        id: '4',
        image: require('../../assets/images/user_profile/user_4.jpg'),
        name: 'Beatriz',
        about: 'Great thing never come from comfort zones.'
    },
    {
        id: '5',
        image: require('../../assets/images/user_profile/user_5.jpg'),
        name: 'Shira',
        about: 'Dream it. Wish it. Do it.'
    },
    {
        id: '6',
        image: require('../../assets/images/user_profile/user_6.jpg'),
        name: 'Diego',
        about: 'Success doesn\'t just find you. You have to go out and get it.'
    },
    {
        id: '7',
        image: require('../../assets/images/user_profile/user_7.jpg'),
        name: 'Marco',
        about: 'The harder you work for something.the greater you\'ll feel'
    },
    {
        id: '8',
        image: require('../../assets/images/user_profile/user_8.jpg'),
        name: 'Steffan',
        about: 'Dream bigger. Do bigger.'
    }
];

const SelectContactScreen = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push('messages/messagesScreen', { item: JSON.stringify(item) })}
            style={styles.contactInfoWrapStyle}>
            <Image
                source={item.image}
                style={{ width: 52.0, height: 52.0, borderRadius: 26.0, }}
            />
            <View style={{ maxWidth: width / 1.3, marginLeft: Sizes.fixPadding + 3.0, }}>
                <Text numberOfLines={1} style={{ ...Fonts.blackColor16Regular }}>
                    {item.name}
                </Text>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor12Regular }}>
                    {item.about}
                </Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {createNewGroupTitle()}
                        </>
                    }
                    data={contactsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <>
                            {inviteFriendsTitle()}
                        </>
                    }
                />
            </View>
        </View>
    )

    function inviteFriendsTitle() {
        return (
            <View style={styles.inviteFriendsTitleWrapStyle}>
                <MaterialIcons
                    name="share"
                    size={24}
                    color={Colors.blackColor}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 17.0, ...Fonts.blackColor16Regular }}>
                    Invite friends
                </Text>
            </View>
        )
    }

    function createNewGroupTitle() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('newGroup/newGroupScreen')}
                style={styles.createNewGroupTitleWrapStyle}
            >
                <View style={styles.newGroupIconWrapStyle}>
                    <MaterialIcons
                        name="group"
                        color={Colors.whiteColor}
                        size={24}
                    />
                </View>
                <Text style={{ marginLeft: Sizes.fixPadding + 3.0, ...Fonts.blackColor16Regular }}>
                    New group
                </Text>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color={Colors.whiteColor}
                        onPress={() => navigation.pop()}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding + 3.0 }}>
                        <Text style={{ ...Fonts.whiteColor16Regular }}>
                            Select contact
                        </Text>
                        <Text style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.whiteColor12Regular }}>
                            232 contacts
                        </Text>
                    </View>
                </View>
                <MaterialIcons
                    name="search"
                    size={24}
                    color={Colors.whiteColor}
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
        paddingHorizontal: Sizes.fixPadding + 5.0,
    },
    inviteFriendsTitleWrapStyle: {
        marginHorizontal: Sizes.fixPadding + 20.0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 3.0
    },
    contactInfoWrapStyle: {
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        alignItems: 'center'
    },
    createNewGroupTitleWrapStyle: {
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding + 3.0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Sizes.fixPadding + 10.0
    },
    newGroupIconWrapStyle: {
        width: 52.0,
        height: 52.0,
        borderRadius: 26.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default SelectContactScreen;