import React from "react";
import { SafeAreaView, View, StatusBar, Image, } from "react-native";
import { Colors } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from "expo-router";

const MediaFullViewScreen = () => {

    const navigation = useNavigation();

    var { item } = useLocalSearchParams();
    item = JSON.parse(item);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blackColor }}>
            <StatusBar backgroundColor={Colors.blackColor} />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {closeButton()}
                {media()}
            </View>
        </SafeAreaView>
    )

    function media() {
        return (
            <Image
                source={item.media}
                style={{
                    width: '100%',
                    height: 250.0,
                }}
            />
        )
    }

    function closeButton() {
        return (
            <MaterialIcons
                name="close"
                size={24}
                color={Colors.whiteColor}
                style={{
                    position: 'absolute',
                    left: 20.0,
                    top: 20.0,
                }}
                onPress={() => navigation.pop()}
            />
        )
    }
}

export default MediaFullViewScreen;