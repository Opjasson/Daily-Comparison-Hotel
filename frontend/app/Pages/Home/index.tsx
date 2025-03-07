import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/app/Components/Moleculs/Button";
import { Table, Rows, Row } from "react-native-table-component";
import _, { rest } from "lodash";

interface props {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<props> = ({ navigation }) => {
    const [data, setData] = useState<
        {
            id: number;
            hotel: string;
            RNO: number;
            ARR: number;
            RNA: number;
            RR: number;
            createdAt: string;
        }[]
    >([]);

    const [head, setHead] = useState(["Hotel", "RNO", "ARR", "RNA", "RR"]);

    // Get data lewat api
    const fetchData = async () => {
        const response = await fetch("http://192.168.217.220:8000/data");
        const data = await response.json();
        setData(data);
    };

    // komponen did amount
    useEffect(() => {
        fetchData();
    }, []);

    // merubah data tanggal menjadi format tahun-bulan-tanggal
    const dataAsli = data.map((item) => {
        const tanggalBaru = item.createdAt.split("T")[0];
        return { ...item, createdAt: tanggalBaru };
    });

    // grouping data berdasarkan tanggal data dibuat
    const groupData = _.groupBy(dataAsli, "createdAt");
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#c9b91a" barStyle="light-content" />
            <View style={styles.navbar}>
                <Text style={styles.textNav}>Home</Text>
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

            {/* Table content */}

            {Object.keys(groupData).map((key) => (
                <View style={styles.contentCon}>
                    <Text>{key}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 3,
                            borderBottomWidth: 2,
                            backgroundColor: "#ede9e8",
                        }}>
                        <Text style={{ width: 70 }}>{head[0]}</Text>
                        <Text>{head[1]}</Text>
                        <Text style={{ width: 90 }}>{head[2]}</Text>
                        <Text>{head[3]}</Text>
                        <Text style={{ width: 90 }}>{head[4]}</Text>
                    </View>

                    {[
                        Object.values(groupData[key]).sort((a, b) => b.id - a.id).map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    navigation.navigate("Update", {
                                        id: item.id,
                                        data: item,
                                    })
                                }
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: 5
                                }}>
                                <View style={{ width: 70 }}>
                                    <Text>{item.hotel}</Text>
                                </View>
                                <View>
                                    <Text>{item.RNO}</Text>
                                </View>
                                <View style={{ width: 90 }}>
                                    <Text>{item.ARR}</Text>
                                </View>
                                <View>
                                    <Text>{item.RNA}</Text>
                                </View>
                                <View style={{ width: 90 }}>
                                    <Text>{item.RR}</Text>
                                </View>
                            </TouchableOpacity>
                        )),
                    ]}
                </View>
            ))}

            {/* End Table Content */}
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

        marginHorizontal: 5,
        borderRadius: 2,
        marginBottom: 10,
    },
});

export default Home;
