import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/app/Components/Moleculs/Button";
import axios from "axios";

interface props {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<props> = ({ navigation }) => {
    const [data, setData] = useState<{hotel : string, RNO : number, ARR : number, RNA : number, RR : number} []>([]);

    const fetchData = async () => {
        const response = await fetch("http://192.168.94.220:8000/data");
        const users = await response.json();
        setData(users);
    };

    useEffect(() => {
        fetchData();
    }, []);
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
                    {data.map((item, index) => (
                        <View key={index}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderWidth: 2,
                                width: 300
                            }}>
                            <Text>{item.hotel}</Text>
                            <Text>{item.RNO}</Text>
                            <Text>{item.ARR}</Text>
                            <Text>{item.RNA}</Text>
                            <Text>{item.RR}</Text>
                        </View>
                    ))}
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
