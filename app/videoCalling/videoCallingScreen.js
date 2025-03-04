import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useLocalSearchParams, useNavigation } from "expo-router";

const VideoCallingScreen = () => {

    const navigation = useNavigation();

    var { item } = useLocalSearchParams();
    item = JSON.parse(item);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require('../../assets/images/girl_1.jpg')}
                    resizeMode="cover"
                >
                    {header()}
                    {cutCallAndScreen()}
                </ImageBackground>
            </View>
        </View>
    )

    function cutCallAndScreen() {
        return (
            <View style={styles.cutCallAndScreenWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.pop()}
                        style={styles.cutCallWrapStyle}
                    >
                        <MaterialIcons name="call-end" size={24} color={Colors.whiteColor} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: Sizes.fixPadding + 10.0, ...Fonts.whiteColor14Regular }}>
                        4:08
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "flex-end" }}>
                    <Feather name="refresh-cw" size={22} color={Colors.whiteColor}
                        style={{ marginBottom: Sizes.fixPadding + 5.0, marginRight: Sizes.fixPadding + 5.0 }}
                    />
                    <Image
                        source={require('../../assets/images/girl_2.jpg')}
                        style={styles.callerImageStyle}
                    />
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                paddingVertical: Sizes.fixPadding,
                alignItems: 'center',
            }}>
                <Text style={{ ...Fonts.whiteColor22Medium }}>
                    {item.name}
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.whiteColor14Regular }}>
                    123456789
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cutCallWrapStyle: {
        backgroundColor: Colors.redColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cutCallAndScreenWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        margin: Sizes.fixPadding * 2.0,
    },
    callerImageStyle: {
        width: 110.0,
        height: 150.0,
        borderRadius: Sizes.fixPadding,
        borderColor: Colors.whiteColor,
        borderWidth: 2.0
    }
})

export default VideoCallingScreen;