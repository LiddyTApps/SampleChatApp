import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const AccountScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.push('privacy/privacyScreen')}
                    >
                        {accountSettings({ title: 'Privacy', iconName: 'lock' })}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.push('deleteAccount/deleteAccountScreen')}
                    >
                        {accountSettings({ title: 'Delete my account', iconName: 'delete' })}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )

    function accountSettings({ title, iconName }) {
        return (
            <View style={styles.accountSettingsWrapStyle}>
                <MaterialIcons
                    name={iconName}
                    color={Colors.grayColor}
                    size={24}
                />
                <Text style={{ marginLeft: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}>
                    {title}
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
                    Account
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
    accountSettingsWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 5.0
    }
})

export default AccountScreen;