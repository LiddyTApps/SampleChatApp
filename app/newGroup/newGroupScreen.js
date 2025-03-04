import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Dimensions, Text, Image, StyleSheet, } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get('screen');

const contactsList = [
    {
        id: '1',
        image: require('../../assets/images/user_profile/user_1.jpg'),
        name: 'Ronan',
        about: 'Your limitation-it\'s only your imagination.',
        isSelected: false,
    },
    {
        id: '2',
        image: require('../../assets/images/user_profile/user_2.jpg'),
        name: 'Braydenn',
        about: 'Push yourself.because no one else is going to do it for you.',
        isSelected: false,
    },
    {
        id: '3',
        image: require('../../assets/images/user_profile/user_3.jpg'),
        name: 'Apollonia',
        about: 'Sometimes later becomes never.Do it now.',
        isSelected: false,
    },
    {
        id: '4',
        image: require('../../assets/images/user_profile/user_4.jpg'),
        name: 'Beatriz',
        about: 'Great thing never come from comfort zones.',
        isSelected: false,
    },
    {
        id: '5',
        image: require('../../assets/images/user_profile/user_5.jpg'),
        name: 'Shira',
        about: 'Dream it. Wish it. Do it.',
        isSelected: false,
    },
    {
        id: '6',
        image: require('../../assets/images/user_profile/user_6.jpg'),
        name: 'Diego',
        about: 'Success doesn\'t just find you. You have to go out and get it.',
        isSelected: false,
    },
    {
        id: '7',
        image: require('../../assets/images/user_profile/user_7.jpg'),
        name: 'Marco',
        about: 'The harder you work for something.the greater you\'ll feel',
        isSelected: false,
    },
    {
        id: '8',
        image: require('../../assets/images/user_profile/user_8.jpg'),
        name: 'Steffan',
        about: 'Dream bigger. Do bigger.',
        isSelected: false,
    },
    {
        id: '9',
        image: require('../../assets/images/user_profile/user_1.jpg'),
        name: 'Ronan',
        about: 'Your limitation-it\'s only your imagination.',
        isSelected: false,
    },
    {
        id: '10',
        image: require('../../assets/images/user_profile/user_2.jpg'),
        name: 'Braydenn',
        about: 'Push yourself.because no one else is going to do it for you.',
        isSelected: false,
    },
    {
        id: '11',
        image: require('../../assets/images/user_profile/user_3.jpg'),
        name: 'Apollonia',
        about: 'Sometimes later becomes never.Do it now.',
        isSelected: false,
    },
    {
        id: '12',
        image: require('../../assets/images/user_profile/user_4.jpg'),
        name: 'Beatriz',
        about: 'Great thing never come from comfort zones.',
        isSelected: false,
    },
    {
        id: '13',
        image: require('../../assets/images/user_profile/user_5.jpg'),
        name: 'Shira',
        about: 'Dream it. Wish it. Do it.',
        isSelected: false,
    },
    {
        id: '14',
        image: require('../../assets/images/user_profile/user_6.jpg'),
        name: 'Diego',
        about: 'Success doesn\'t just find you. You have to go out and get it.',
        isSelected: false,
    },
    {
        id: '15',
        image: require('../../assets/images/user_profile/user_7.jpg'),
        name: 'Marco',
        about: 'The harder you work for something.the greater you\'ll feel',
        isSelected: false,
    },
    {
        id: '16',
        image: require('../../assets/images/user_profile/user_8.jpg'),
        name: 'Steffan',
        about: 'Dream bigger. Do bigger.',
        isSelected: false,
    }
];

const NewGroupsScreen = () => {

    const navigation = useNavigation();

    const [state, setState] = useState({
        contactsData: contactsList,
        groupMembersData: [],
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        contactsData,
        groupMembersData,
    } = state;

    const [showToast, setshowToast] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                {header()}
                {groupMembersData.length != 0
                    ?
                    selectedMemberInfo()
                    :
                    null
                }
                {contacts()}
                {nextFlatButton()}
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
                        At least 1 contact must be selected
                    </Text>
                </View>
            </Snackbar>
        )
    }

    function nextFlatButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    groupMembersData.length == 0
                        ?
                        setshowToast(true)
                        :
                        navigation.push('groupInfo/groupInfoScreen');
                }}
                style={styles.nextFlatButtonWrapStyle}
            >
                <MaterialIcons
                    name="arrow-forward"
                    size={27}
                    color={Colors.whiteColor}
                />
            </TouchableOpacity>
        )
    }

    function selectedMemberInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateContacts({ id: item.id })}
                style={{ alignItems: 'center', marginRight: Sizes.fixPadding + 2.0 }}>
                <View>
                    <Image
                        source={item.image}
                        style={{ width: 52.0, height: 52.0, borderRadius: 26.0, }}
                    />
                    <View style={styles.contactSelectedIndicatorWrapStyle}>
                        <MaterialIcons
                            name="close"
                            color={Colors.whiteColor}
                            size={15}
                        />
                    </View>
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 3.0, ...Fonts.grayColor14Regular }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )

        return (
            <View>
                <FlatList
                    data={groupMembersData}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: Sizes.fixPadding + 5.0, paddingTop: Sizes.fixPadding + 5.0 }}
                />
                <View style={styles.indicatorStyle} />
            </View>
        )
    }

    function updateGroupMemberData() {
        let filterArray = contactsData.filter((val, i) => {
            if (val.isSelected == true) {
                return val;
            }
        })
        updateState({ groupMembersData: filterArray });
    }

    function updateContacts({ id }) {
        const newList = contactsData.map((contact) => {
            if (contact.id === id) {
                const updatedItem = { ...contact, isSelected: !contact.isSelected, };
                if (updatedItem.isSelected) {
                    groupMembersData.push(updatedItem);
                }
                else {
                    let filterArray = groupMembersData.filter((val, i) => {
                        if (val.id != id) {
                            return val;
                        }
                    })
                    updateState({ groupMembersData: filterArray })
                }
                return updatedItem;
            }
            return contact;
        });
        updateState({ contactsData: newList })
    }

    function contacts() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { updateContacts({ id: item.id }) }}
                style={styles.contactInfoWrapStyle}>
                <View>
                    <Image
                        source={item.image}
                        style={{ width: 52.0, height: 52.0, borderRadius: 26.0, }}
                    />
                    {item.isSelected ?
                        <View style={styles.contactSelectedIndicatorWrapStyle}>
                            <MaterialIcons
                                name="check"
                                color={Colors.whiteColor}
                                size={15}
                            />
                        </View>
                        :
                        null
                    }
                </View>
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
            <FlatList
                data={contactsData}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding * 3.0 }}
            />
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
                            New Group
                        </Text>
                        <Text style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.whiteColor12Regular }}>
                            Add participants
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
    contactInfoWrapStyle: {
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        alignItems: 'center'
    },
    contactSelectedIndicatorWrapStyle: {
        position: 'absolute',
        right: 0.0,
        bottom: 0.0,
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        borderColor: Colors.whiteColor,
        borderWidth: 1.5,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicatorStyle: {
        backgroundColor: Colors.grayColor,
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding,
        height: 0.50
    },
    nextFlatButtonWrapStyle: {
        position: 'absolute',
        right: 20.0,
        bottom: 20.0,
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        elevation: 5.0,
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
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

export default NewGroupsScreen;