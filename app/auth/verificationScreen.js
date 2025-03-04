import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Text, Keyboard } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { CircleFade } from 'react-native-animated-spinkit';
import { Modal } from 'react-native-paper';
import OTPField from 'react-native-otp-field';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get('window');

const VerificationScreen = () => {

    const navigation = useNavigation();

    const [otpInput, setotpInput] = useState('');
    const [isLoading, setisLoading] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {backArrow()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {verifyTitle()}
                    {otpInfo()}
                    {otpFields()}
                </ScrollView>
                {goNextFlatButton()}
            </View>
            {loading()}
        </View>
    )

    function goNextFlatButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    setisLoading(true)
                    setTimeout(() => {
                        setisLoading(false)
                        navigation.push('bottomTabBar/bottomTabBarScreen')
                    }, 2000);
                }}
                style={styles.goNextFlatButtonWrapStyle}
            >
                <MaterialIcons name="arrow-forward" size={25} color={Colors.whiteColor} />
            </TouchableOpacity>
        )
    }

    function loading() {
        return (
            <Modal
                visible={isLoading}
                onDismiss={() => { }}
                contentContainerStyle={styles.dialogWrapStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <CircleFade size={40} color={Colors.primaryColor} />
                    <Text style={{
                        ...Fonts.grayColor15Regular,
                        marginTop: Sizes.fixPadding * 3.0
                    }}>
                        Please Wait..
                    </Text>
                </View>
            </Modal>
        );
    }

    function otpFields() {
        return (
            <View style={{
                marginTop: Sizes.fixPadding * 4.0,
                marginHorizontal: Sizes.fixPadding * 2.0
            }}>
                <OTPField
                    length={4}
                    value={otpInput}
                    onChange={(val) => {
                        setotpInput(val);
                        if (val.length == 4) {
                            Keyboard.dismiss();
                            setisLoading(true)
                            setTimeout(() => {
                                setisLoading(false)
                                navigation.push('bottomTabBar/bottomTabBarScreen')
                            }, 2000);
                        }
                    }}
                    textFieldStyle={{ ...styles.textFieldStyle }}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
            </View>
        )
    }

    function otpInfo() {
        return (
            <Text style={{ marginTop: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.grayColor15Regular }}>
                Enter the OTP sent to your mobile number
            </Text>
        )
    }

    function verifyTitle() {
        return (
            <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 3.0, ...Fonts.blackColor18Bold }}>
                Verify details
            </Text>
        )
    }

    function backArrow() {
        return (
            <MaterialIcons
                name="arrow-back"
                size={24}
                color="black"
                onPress={() => navigation.pop()}
                style={{ margin: Sizes.fixPadding + 5.0, alignSelf: 'flex-start', }}
            />
        )
    }
}

const styles = StyleSheet.create({
    textFieldStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        borderColor: 'rgba(179, 77, 77, 0.30)',
        borderWidth: 1.0,
        ...Fonts.blackColor17Medium,
        width: width / 8.0,
        height: width / 8.0,
    },
    dialogWrapStyle: {
        backgroundColor: Colors.whiteColor,
        width: '85%',
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding * 2.0,
    },
    goNextFlatButtonWrapStyle: {
        position: 'absolute',
        bottom: 20.0,
        right: 20.0,
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    }
})

export default VerificationScreen;