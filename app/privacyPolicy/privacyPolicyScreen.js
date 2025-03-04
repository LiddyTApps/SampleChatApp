import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const PrivacyPolicyScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {privacyPolicyInfo()}
                </ScrollView>
            </View>
        </View>
    )

    function privacyPolicyInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding + 10.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, textAlign: 'justify', ...Fonts.blackColor16Regular }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, textAlign: 'justify', ...Fonts.blackColor16Regular }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, textAlign: 'justify', ...Fonts.blackColor16Regular }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, textAlign: 'justify', ...Fonts.blackColor16Regular }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                    Privacy Policy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56.0,
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: Sizes.fixPadding + 5.0,
    }
})

export default PrivacyPolicyScreen;