import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/app/Components/Moleculs/Button";

interface props {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.textNav}>Home</Text>
            </View>
            <View style={styles.topBar}>
                <Button
                    aksi={() => navigation.navigate("Input")}
                    style={styles.button}
                    children="INPUT"
                />
                <Button
                    aksi={() => navigation.navigate("Rank")}
                    style={styles.button}
                    children="RANKING"
                />
            </View>

            <View style={styles.main}>
                <ScrollView style={{ flexDirection: "row" }}>
                    <View style={styles.content}>
                        <Text style={{ width: 100 }}>Hotel</Text>
                        <Text style={{ width: 100 }}>RNO</Text>
                        <Text style={{ width: 100 }}>ARR</Text>
                        <Text style={{ width: 100 }}>RNA</Text>
                        <Text style={{ width: 100 }}>RR</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ width: 100 }}>Premier</Text>
                        <Text style={{ width: 100 }}>30000</Text>
                        <Text style={{ width: 100 }}>20</Text>
                        <Text style={{ width: 100 }}>30</Text>
                        <Text style={{ width: 100 }}>400000</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textNav: {
        fontSize: 25,
        fontWeight: "bold",
    },
    navbar: {
        padding: 7,
    },
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: "red",
        width: 150,
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
    },
    topBar: {
        flexDirection: "row",
        borderWidth: 3,
        justifyContent: "space-around",
    },
    main: {
        flex: 1,
        backgroundColor: "#1111",
        
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
    },
});

export default Home;
