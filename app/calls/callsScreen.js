import React from "react";
import { View, Image, Text, FlatList, StyleSheet, } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const callsList = [
    {
        id: '1',
        image: require('../../assets/images/user_profile/user_1.jpg'),
        name: 'Ronan',
        dateAndTime: 'June 09, 11:30 PM',
        isCall: true,
    },
    {
        id: '2',
        image: require('../../assets/images/user_profile/user_2.jpg'),
        name: 'Brayden',
        isMissed: true,
        dateAndTime: 'June 09, 10:14 PM',
        isCall: false,
    },
    {
        id: '3',
        image: require('../../assets/images/user_profile/user_3.jpg'),
        name: 'Apollonia',
        isMissed: true,
        dateAndTime: 'June 08, 10:30 AM',
        isCall: true,
    },
    {
        id: '4',
        image: require('../../assets/images/user_profile/user_4.jpg'),
        name: 'Beatriz',
        dateAndTime: 'June 07, 12:30 AM',
        isCall: false,
    },
    {
        id: '5',
        image: require('../../assets/images/user_profile/user_5.jpg'),
        name: 'Shira',
        isMissed: true,
        dateAndTime: 'June 06, 10:30 AM',
        isCall: false,
    },
    {
        id: '6',
        image: require('../../assets/images/user_profile/user_6.jpg'),
        name: 'Diego',
        isMissed: true,
        dateAndTime: 'June 05, 08:40 AM',
        isCall: true,
    },
    {
        id: '7',
        image: require('../../assets/images/user_profile/user_7.jpg'),
        name: 'Marco',
        dateAndTime: 'June 04, 09:35 AM',
        isCall: false,
    },
    {
        id: '8',
        image: require('../../assets/images/user_profile/user_8.jpg'),
        name: 'Steffan',
        isMissed: true,
        dateAndTime: 'June 04, 07:12 AM',
        isCall: true,
    },
];

const CallsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <View style={{ flex: 1, }}>
                {header()}
                {calls()}
            </View>
        </View>
    )

    function calls() {
        const renderItem = ({ item, index }) => (
            <View style={{ paddingHorizontal: Sizes.fixPadding + 5.0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 60.0,
                                height: 60.0,
                                borderRadius: 30.0,
                            }}
                        />
                        <View style={{ marginLeft: Sizes.fixPadding }}>
                            <Text style={{ ...Fonts.blackColor16Medium }}>
                                {item.name}
                            </Text>
                            <View style={{ marginTop: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons
                                    name={item.isMissed ? "call-missed" : "call-made"}
                                    size={17}
                                    color={item.isMissed ? Colors.redColor : Colors.lightBlueColor}
                                />
                                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.grayColor14Regular }}>
                                    {item.dateAndTime}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <MaterialIcons
                        name={item.isCall ? "phone" : "videocam"}
                        color={Colors.primaryColor}
                        size={20}
                        onPress={() => {
                            navigation.push(item.isCall ? 'calling/callingScreen' : 'videoCalling/videoCallingScreen', { item: JSON.stringify(item) })
                        }}
                    />
                </View>
                {
                    index == callsList.length - 1
                        ?
                        null
                        :
                        <View style={{
                            backgroundColor: '#e0e0e0',
                            height: 1.0,
                            marginVertical: Sizes.fixPadding + 5.0
                        }} />
                }
            </View>
        )
        return (
            <FlatList
                data={callsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: Sizes.fixPadding * 12.0,
                    paddingTop: Sizes.fixPadding + 5.0
                }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.whiteColor22Medium }}>
                    Calls
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
    }
})

export default CallsScreen;