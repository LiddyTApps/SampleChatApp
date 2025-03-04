import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";
import { useLocalSearchParams, useNavigation } from "expo-router";

const CallingScreen = () => {

    const navigation = useNavigation();

    var { item } = useLocalSearchParams();
    item = JSON.parse(item);

    const [speakerOn, setspeakerOn] = useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={item.image}
                    resizeMode="cover"
                    blurRadius={2}
                >
                    {callerInfo()}
                    {callingInfo()}
                </ImageBackground>
            </View>
        </View>
    )

    function callingInfo() {
        return (
            <View style={styles.callingInfoWrapStyle}>
                <MaterialIcons
                    name={speakerOn ? "volume-up" : "volume-off"}
                    onPress={() => setspeakerOn(!speakerOn)}
                    size={24}
                    color={Colors.whiteColor}
                />
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.cutCallWrapStyle}
                >
                    <MaterialIcons name="call-end" size={24} color={Colors.whiteColor} />
                </TouchableOpacity>
                <Text style={{ ...Fonts.whiteColor14Regular }}>
                    4:08
                </Text>
            </View>
        )
    }

    function callerInfo() {
        return (
            <View>
                <View style={{ height: 170.0, marginTop: Sizes.fixPadding * 4.0, alignItems: 'center' }}>
                    <Image
                        source={item.image}
                        style={styles.callerImageStyle}
                    />
                    <Animatable.View
                        animation="zoomIn"
                        iterationCount="infinite"
                        direction="alternate"
                        style={styles.blinkingViewWrapStyle}
                    >
                    </Animatable.View>
                </View>
                <Text style={{ marginTop: Sizes.fixPadding * 2.0, textAlign: 'center', ...Fonts.whiteColor22Medium }} >
                    {item.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blinkingViewWrapStyle: {
        position: 'absolute',
        top: 0.0,
        bottom: 0.0,
        width: 170.0,
        height: 170.0,
        borderRadius: 85.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255,0.20)',
        borderWidth: 4.0,
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
    callerImageStyle: {
        width: 100.0,
        height: 100.0,
        borderRadius: 50.0,
        top: 35.0,
    },
    callingInfoWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.07)',
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    cutCallWrapStyle: {
        backgroundColor: Colors.redColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CallingScreen;