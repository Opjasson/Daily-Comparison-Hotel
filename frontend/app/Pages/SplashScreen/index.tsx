import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image, StatusBar } from "react-native";
import { BackgroundSP } from "../../Inventory/image";
import Button from "@/app/Components/Moleculs/Button";
import { NavigationProp } from "@react-navigation/native";

interface props {
    navigation : NavigationProp<any, any>
}


const splashScreen : React.FC<props> = ({navigation}) => {
    const handleAksi = () => {
        alert("hallo");
    };
    return (
        <View style={styles.area}>
              <StatusBar backgroundColor="#c9b91a" barStyle="light-content" />
            <View style={styles.container}>
                <View>
                    <Image style={styles.imgLogo} source={BackgroundSP} />
                </View>
                <Text style={styles.onText}>Daily Comparison</Text>
                <Button
                    style={styles.button}
                    aksi={() => navigation.navigate('Home')}
                    children="Get Started"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgSplash: {
        flex: 1,
        justifyContent: "center",
    },
    area: {
        backgroundColor: "#dbcc3d",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imgLogo: {
        height: 200,
        width: 300,
    },
    container: {
        height: 500,
        justifyContent: "center",
        backgroundColor: "#c9b91a",
        borderRadius: 10,
        elevation: 9,
        position: "relative",
    },
    button: {
        backgroundColor: "#dbcc3d",
        width: 200,
        padding: 8,
        borderRadius: 10,
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 50,
    },
    onText: {
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: 900,
        color: "white",
        marginHorizontal: "auto",
    },
});

export default splashScreen;
