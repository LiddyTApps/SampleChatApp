import React from "react";
import { View, TouchableOpacity, Dimensions, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const MoreScreens = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userInfo()}
                    {divider()}
                    {settings()}
                    {divider()}
                    {inviteFriends()}
                </ScrollView>
            </View>
        </View>
    )

    function inviteFriends() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 3.0, flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons
                    name="group"
                    size={22}
                    color={Colors.grayColor}
                />
                <Text style={{ marginLeft: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}>
                    Invite friend
                </Text>
            </View>
        )
    }

    function settings() {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('account/accountScreen')}
                    style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 3.0, flexDirection: 'row', alignItems: 'center', }}
                >
                    <MaterialIcons name="vpn-key" size={22} color={Colors.grayColor} />
                    <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
                        <Text style={{ ...Fonts.blackColor16Regular }}>
                            Account
                        </Text>
                        <Text style={{ maxWidth: width - 120, marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor14Regular }}>
                            Privacy and delete account
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 3.0, flexDirection: 'row', alignItems: 'center', }}>
                    <MaterialIcons name="notifications" size={22} color={Colors.grayColor} />
                    <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
                        <Text style={{ ...Fonts.blackColor16Regular }}>
                            Notifications
                        </Text>
                        <Text style={{ maxWidth: width - 120, marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor14Regular }}>
                            Message and group
                        </Text>
                    </View>
                </View>
            </>
        )
    }

    function divider() {
        return (
            <View style={{ backgroundColor: '#e0e0e0', height: 1.0, }} />
        )
    }

    function userInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('profile/profileScreen', { id: `profileImage` })}
                style={styles.userInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/user_profile/user_3.jpg')}
                    style={{
                        width: 60.0,
                        height: 60.0,
                        borderRadius: 30.0,
                    }}
                />
                <View style={{ maxWidth: width - 90, marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor16Regular }}>
                        Allison Perry
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.grayColor12Regular }}>
                        Push yourself, because no one else is going to do it for you.
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.whiteColor19Medium }}>
                    Settings
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.primaryColor,
        height: 56.0,
        justifyContent: 'center',
        paddingHorizontal: Sizes.fixPadding + 5.0
    },
    userInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 2.0
    },
})

export default MoreScreens;