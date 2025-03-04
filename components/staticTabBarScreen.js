import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions, } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Colors, Fonts, CommonStyles } from "../constants/styles";

const { width } = Dimensions.get("window");

const StaticTabbar = ({ tabs, value, onChangeIndex }) => {

    const values = tabs.map((tab, index) => useRef(new Animated.Value(index === 0 ? 1 : 0)).current);

    const onPress = (index) => {
        const tabWidth = width / tabs.length;
        Animated.sequence([
            Animated.parallel(
                values.map(v => Animated.timing(v, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                })),
            ),
            Animated.parallel([
                Animated.spring(value, {
                    toValue: tabWidth * index,
                    useNativeDriver: true,
                }),
                Animated.spring(values[index], {
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }

    return (
        <>
            <View style={{ flexDirection: "row" }}>
                {
                    tabs.map((tab, key) => {
                        const tabWidth = width / tabs.length;
                        const cursor = tabWidth * key;
                        const opacity = value.interpolate({
                            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
                            outputRange: [1, 0, 1],
                            extrapolate: "clamp",
                        });
                        const translateY = values[key].interpolate({
                            inputRange: [0, 1],
                            outputRange: [64, 0],
                            extrapolate: "clamp",
                        });
                        const opacity1 = values[key].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                            extrapolate: "clamp",
                        });
                        return (
                            <React.Fragment key={key}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        onChangeIndex(key);
                                        onPress(key)
                                    }}
                                >
                                    <Animated.View style={[styles.tab, { opacity }]}>
                                        <Icon name={tab.name} color='#E1B8B8' size={28} />
                                        <Text style={{ ...Fonts.whiteColor12Regular }}>
                                            {tab.title}
                                        </Text>
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                                <Animated.View
                                    style={{
                                        position: "absolute",
                                        top: -4,
                                        left: tabWidth * key,
                                        width: tabWidth,
                                        height: 64,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        opacity: opacity1,
                                        transform: [{ translateY }],
                                    }}
                                >
                                    <View style={styles.activeIcon}>
                                        <Icon name={tab.name} color={Colors.primaryColor} size={28} />
                                    </View>
                                </Animated.View>
                            </React.Fragment>
                        );
                    })
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 64,
    },
    activeIcon: {
        backgroundColor: Colors.whiteColor,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3.0,
        borderColor: 'rgba(224, 224, 224, 0.20)',
        borderWidth: 1.0,
        ...CommonStyles.shadow
    },
});

export default StaticTabbar;
