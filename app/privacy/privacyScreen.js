import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform, ScrollView } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Switch, Modal } from 'react-native-paper';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get('screen');

const PrivacyScreen = () => {

    const navigation = useNavigation();

    const [state, setState] = useState({
        isAvailableForDialog: false,
        lastSeenAvailableFor: 'Everyone',
        profilePhotoAvailableFor: 'Everyone',
        aboutAvailableFor: 'Everyone',
        selectionFor: '',
        isSwitchOn: true
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        isAvailableForDialog,
        lastSeenAvailableFor,
        profilePhotoAvailableFor,
        aboutAvailableFor,
        selectionFor,
        isSwitchOn,
    } = state;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
                    {privacyInfo()}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ isAvailableForDialog: true, selectionFor: 'LastSeen' })}
                    >
                        {lastSeenInfo({ title: 'Last seen', availableFor: lastSeenAvailableFor })}
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ isAvailableForDialog: true, selectionFor: 'ProfilePhoto' })}
                    >
                        {lastSeenInfo({ title: 'Profile photo', availableFor: profilePhotoAvailableFor })}
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ isAvailableForDialog: true, selectionFor: 'About' })}
                    >
                        {lastSeenInfo({ title: 'About', availableFor: aboutAvailableFor })}
                    </TouchableOpacity>

                    {readReceiptsInfo()}
                    {divider()}
                </ScrollView>
            </View>
            {availableForOptionsDialog()}
        </View>
    )

    function divider() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding * 2.0, backgroundColor: '#e0e0e0', height: 1.0, }} />
        )
    }

    function readReceiptsInfo() {
        return (
            <View style={styles.readReceiptsInfoWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor16Regular }}>
                        Read receipts
                    </Text>
                    <Text style={{ marginTop: Sizes.fixPadding - 5.0, width: width - 100, ...Fonts.grayColor12Regular }}>
                        If turned off, you won't send or receive Read receipts.Read receipts are always sent for group chats.
                    </Text>
                </View>
                <Switch
                    color={Colors.primaryColor}
                    value={isSwitchOn}
                    onValueChange={() => updateState({ isSwitchOn: !isSwitchOn })}
                    style={{ transform: [{ scale: Platform.OS == 'ios' ? 0.7 : 1 }] }}
                />
            </View>
        )
    }

    function availableForOptionsDialog() {
        return (
            <Modal
                visible={isAvailableForDialog}
                onDismiss={() => { }}
                contentContainerStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: Colors.whiteColor }}>
                    <Text style={{ marginBottom: Sizes.fixPadding + 10.0, ...Fonts.blackColor16Medium }}>
                        {selectionFor}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            updateState({ isAvailableForDialog: false })
                            selectionFor == 'LastSeen' ?
                                updateState({ lastSeenAvailableFor: 'Everyone' })
                                :
                                selectionFor == 'ProfilePhoto' ?
                                    updateState({ profilePhotoAvailableFor: 'Everyone' })
                                    :
                                    selectionFor == 'About' ?
                                        updateState({ aboutAvailableFor: 'Everyone' })
                                        :
                                        null
                        }}
                        style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}
                    >
                        <View style={styles.radioButtonStyle}>
                            {
                                selectionFor == 'LastSeen' ?
                                    lastSeenAvailableFor == 'Everyone'
                                        ?
                                        <View
                                            style={{
                                                backgroundColor: Colors.primaryColor,
                                                width: 11.0,
                                                height: 11.0,
                                                borderRadius: 5.5,
                                            }}
                                        />
                                        :
                                        null
                                    :
                                    selectionFor == "ProfilePhoto" ?
                                        profilePhotoAvailableFor == 'Everyone'
                                            ?
                                            <View
                                                style={{
                                                    backgroundColor: Colors.primaryColor,
                                                    width: 11.0,
                                                    height: 11.0,
                                                    borderRadius: 5.5,
                                                }}
                                            />
                                            :
                                            null
                                        :
                                        selectionFor == "About" ?
                                            aboutAvailableFor == 'Everyone'
                                                ?
                                                <View
                                                    style={{
                                                        backgroundColor: Colors.primaryColor,
                                                        width: 11.0,
                                                        height: 11.0,
                                                        borderRadius: 5.5,
                                                    }}
                                                />
                                                :
                                                null
                                            : null
                            }
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor16Regular }}>
                            Everyone
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            updateState({ isAvailableForDialog: false })
                            selectionFor == 'LastSeen' ?
                                updateState({ lastSeenAvailableFor: 'My contacts' })
                                :
                                selectionFor == 'ProfilePhoto' ?
                                    updateState({ profilePhotoAvailableFor: 'My contacts' })
                                    :
                                    selectionFor == 'About' ?
                                        updateState({ aboutAvailableFor: 'My contacts' })
                                        :
                                        null
                        }}
                        style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}
                    >
                        <View style={styles.radioButtonStyle}>
                            {
                                selectionFor == 'LastSeen' ?
                                    lastSeenAvailableFor == 'My contacts'
                                        ?
                                        <View
                                            style={{
                                                backgroundColor: Colors.primaryColor,
                                                width: 11.0,
                                                height: 11.0,
                                                borderRadius: 5.5,
                                            }}
                                        />
                                        :
                                        null
                                    :
                                    selectionFor == "ProfilePhoto" ?
                                        profilePhotoAvailableFor == 'My contacts'
                                            ?
                                            <View
                                                style={{
                                                    backgroundColor: Colors.primaryColor,
                                                    width: 11.0,
                                                    height: 11.0,
                                                    borderRadius: 5.5,
                                                }}
                                            />
                                            :
                                            null
                                        :
                                        selectionFor == "About" ?
                                            aboutAvailableFor == 'My contacts'
                                                ?
                                                <View
                                                    style={{
                                                        backgroundColor: Colors.primaryColor,
                                                        width: 11.0,
                                                        height: 11.0,
                                                        borderRadius: 5.5,
                                                    }}
                                                />
                                                :
                                                null
                                            : null
                            }
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor16Regular }}>
                            My contacts
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            updateState({ isAvailableForDialog: false })
                            selectionFor == 'LastSeen' ?
                                updateState({ lastSeenAvailableFor: 'Nobody' })
                                :
                                selectionFor == 'ProfilePhoto' ?
                                    updateState({ profilePhotoAvailableFor: 'Nobody' })
                                    :
                                    selectionFor == 'About' ?
                                        updateState({ aboutAvailableFor: 'Nobody' })
                                        :
                                        null
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <View style={styles.radioButtonStyle}>
                            {
                                selectionFor == 'LastSeen' ?
                                    lastSeenAvailableFor == 'Nobody'
                                        ?
                                        <View
                                            style={{
                                                backgroundColor: Colors.primaryColor,
                                                width: 11.0,
                                                height: 11.0,
                                                borderRadius: 5.5,
                                            }}
                                        />
                                        :
                                        null
                                    :
                                    selectionFor == "ProfilePhoto" ?
                                        profilePhotoAvailableFor == 'Nobody'
                                            ?
                                            <View
                                                style={{
                                                    backgroundColor: Colors.primaryColor,
                                                    width: 11.0,
                                                    height: 11.0,
                                                    borderRadius: 5.5,
                                                }}
                                            />
                                            :
                                            null
                                        :
                                        selectionFor == "About" ?
                                            aboutAvailableFor == 'Nobody'
                                                ?
                                                <View
                                                    style={{
                                                        backgroundColor: Colors.primaryColor,
                                                        width: 11.0,
                                                        height: 11.0,
                                                        borderRadius: 5.5,
                                                    }}
                                                />
                                                :
                                                null
                                            : null
                            }
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor16Regular }}>
                            Nobody
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    function lastSeenInfo({ title, availableFor }) {
        return (
            <View style={{ marginBottom: Sizes.fixPadding + 10.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor16Regular }}>
                    {title}
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.grayColor14Regular }}>
                    {availableFor}
                </Text>
            </View>
        )
    }

    function privacyInfo() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding + 10.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.primaryColor15Regular }}>
                    Who can see my personal info
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 3.0, ...Fonts.blackColor13Regular }}>
                    If you don't share your Last Seen, you won't be able to see other people's Lat Seen
                </Text>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back"
                    size={24}
                    color={Colors.whiteColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.whiteColor19Medium }}>
                    Privacy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        height: 56.0,
        paddingHorizontal: Sizes.fixPadding + 5.0
    },
    radioButtonStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    readReceiptsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    dialogContainerStyle: {
        width: '85%',
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignSelf: 'center',
        padding: Sizes.fixPadding * 2.0,
    }
})

export default PrivacyScreen;