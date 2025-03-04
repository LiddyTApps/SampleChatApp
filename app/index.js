import React, { useState, useCallback } from "react";
import { View, Image, TouchableOpacity, BackHandler, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";
import MyStatusBar from "../components/myStatusBar";
import { useNavigation } from "expo-router";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        setbackClickCount(1)
        setTimeout(() => {
            setbackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setbackClickCount] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={styles.pageStyle}>
                <View>
                    <Text style={{ marginBottom: Sizes.fixPadding * 5.0, textAlign: 'center', ...Fonts.primaryColor26Regular }}>
                        Welcome to The Keep Us Company
                    </Text>
                    {welcomeLogo()}
                </View>
                <View>
                    {privacyPolicyAndTermsOfUseInfo()}
                    {agreeAndContinueButton()}
                </View>
            </View>
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor12Regular }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </View>
    )

    function agreeAndContinueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('auth/signinScreen')}
                style={styles.agreeAndContinueButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Light }}>
                    AGREE AND CONTINUE
                </Text>
            </TouchableOpacity>
        )
    }

    function privacyPolicyAndTermsOfUseInfo() {
        return (
            <Text style={styles.privacyPolicyAndTermsOfUseInfoWrapStyle}>
                {`Read our `}
                <Text
                    onPress={() => navigation.push('privacyPolicy/privacyPolicyScreen')}
                    style={{ ...Fonts.lightBlueColor15Regular }}
                >
                    Privacy Policy
                </Text>
                {`. Tap "Agree and continue" to \n accept the `}
                <Text
                    onPress={() => navigation.push('termsOfUse/termsOfUseScreen')}
                    style={{ ...Fonts.lightBlueColor15Regular }}
                >
                    Terms of Service.
                </Text>
            </Text>
        )
    }

    function welcomeLogo() {
        return (
            <View style={styles.welcomeLogoWrapStyle}>
                <Image 
                source={require('/Users/lydiathomas/Desktop/ChatApp/assets/images/Logo.png')} 
                style={{ width: 190, height: 190 }} 
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: "#f216c2",
        position: "absolute",
        bottom: 40,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    pageStyle: {
        marginBottom: Sizes.fixPadding * 7.0,
        marginTop: Sizes.fixPadding * 3.0,
        flex: 1,
        justifyContent: 'space-between'
    },
    agreeAndContinueButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding + 2.0,
        borderRadius: Sizes.fixPadding - 7.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 4.0,
        marginTop: Sizes.fixPadding * 4.0,
    },
    privacyPolicyAndTermsOfUseInfoWrapStyle: {
        lineHeight: 26.0,
        textAlign: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        ...Fonts.grayColor15Regular
    },
    welcomeLogoWrapStyle: {
        backgroundColor: '#e356c4',
        width: 240.0,
        height: 240.0,
        borderRadius: 120.0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default WelcomeScreen;