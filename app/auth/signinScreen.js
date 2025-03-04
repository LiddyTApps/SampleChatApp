import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import IntlPhoneInput from 'react-native-intl-phone-input';
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const SigninScreen = () => {

    const navigation = useNavigation();

    const [mobileNumber, setmobileNumber] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ marginTop: Sizes.fixPadding * 4.0, flex: 1, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <ScrollView
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                >
                    {enterMobileNumberTitle()}
                    {verifyDetail()}
                    {mobileNumberInfo()}
                </ScrollView>
                {goNextFlatButton()}
            </View>
        </View>
    )

    function goNextFlatButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('auth/verificationScreen')}
                style={styles.goNextFlatButtonWrapStyle}
            >
                <MaterialIcons name="arrow-forward" size={25} color={Colors.whiteColor} />
            </TouchableOpacity>
        )
    }

    function mobileNumberInfo() {
        return (
            <View>
                <Text style={{ ...Fonts.grayColor15Bold }}>
                    Mobile Number
                </Text>
                <IntlPhoneInput
                    onChangeText={({ phoneNumber }) => setmobileNumber(phoneNumber)}
                    defaultCountry="IN"
                    containerStyle={{ marginTop: Sizes.fixPadding, }}
                    placeholder="Mobile Number"
                    phoneInputStyle={{
                        ...styles.mobileNumberFieldStyle,
                        borderBottomColor: Colors.grayColor,
                        paddingBottom: Sizes.fixPadding - 5.0,
                    }}
                    dialCodeTextStyle={{ ...Fonts.blackColor17Medium, marginLeft: Sizes.fixPadding }}
                    flagStyle={{ fontSize: 26 }}
                    modalCountryItemCountryNameStyle={{ ...Fonts.blackColor17Medium }}
                    filterInputStyle={{ ...Fonts.blackColor17Medium }}
                    placeholderTextColor={Colors.grayColor}
                    inputProps={{ selectionColor: Colors.primaryColor, cursorColor: Colors.primaryColor }}
                />
            </View>
        )
    }

    function verifyDetail() {
        return (
            <Text style={{ marginBottom: Sizes.fixPadding * 2.0, ...Fonts.grayColor15Regular }}>
                ChatApp will send an SMS message to verify your mobile number.
            </Text>
        )
    }

    function enterMobileNumberTitle() {
        return (
            <View>
                <Text style={{ marginBottom: Sizes.fixPadding * 2.0, ...Fonts.blackColor18Bold }}>
                    Enter your mobile number
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mobileNumberFieldStyle: {
        borderBottomWidth: 1.0,
        flex: 1,
        marginLeft: Sizes.fixPadding + 10.0,
        paddingLeft: Sizes.fixPadding + 5.0,
        paddingTop:Sizes.fixPadding-5.0,
        ...Fonts.blackColor17Medium
    },
    goNextFlatButtonWrapStyle: {
        position: 'absolute',
        bottom: 20.0,
        right: 0.0,
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    }
})

export default SigninScreen;