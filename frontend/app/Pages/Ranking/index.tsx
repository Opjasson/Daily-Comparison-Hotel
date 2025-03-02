import Button from "@/app/Components/Moleculs/Button";
import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface props {
    navigation: NavigationProp<any, any>;
}

const Ranking: React.FC<props> = ({ navigation }) => {
    const [data, setData] = useState<{ hotel: string; RR: number }[]>([]);

    async function getData() {
        const response = await fetch("http://192.168.94.220:8000/data");
        const json = await response.json();

        // Mengurutkan data RR dari yang terbesar
        const sortData = json.sort((a: any, b: any) => b.RR - a.RR);
        setData(sortData);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.textNav}>Ranking</Text>
            </View>
            <View style={styles.topBar}>
                <Button
                    aksi={() => navigation.navigate("Home")}
                    style={styles.button}
                    children="HOME"
                />

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

            <View style={styles.containerRank}>
                <View style={styles.headRank}>
                    <Text style={styles.textHead}>Ranking Hari Ini</Text>
                    <Text style={styles.textHead}>2 Maret 2025</Text>
                </View>

                {data.map((item, index) => (
                    <View style={styles.mainRank}>
                        <Text style={styles.textRank}>{index + 1}</Text>
                        <Text style={styles.textRank}>{item.hotel}</Text>
                        <Text style={styles.textRank}>{item.RR}</Text>
                    </View>
                ))}
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
        marginBottom: 40,
        backgroundColor: "#c9b91a",
    },
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: "#dbcc3d",
        width: 100,
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    contentCon: {
        width: 400,
        borderWidth: 2,
        marginHorizontal: "auto",
        borderRadius: 2,
    },
    containerRank: {
        flex: 1,
    },
    headRank: {
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#edeae4",
        paddingVertical: 3,
        elevation: 2,
    },
    textHead: {
        fontSize: 20,
        fontWeight: "bold",
    },
    mainRank: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 2,
        borderColor: "#edebe8",
        paddingBottom: 5,
    },
    textRank: {
        textAlign: "left",
        width: 90,
    },
});
export default Ranking;
