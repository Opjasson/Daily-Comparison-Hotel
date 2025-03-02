import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/app/Components/Moleculs/Button";
import { Table, Rows, Row } from "react-native-table-component";

interface props {
    navigation: NavigationProp<any, any>;
}



const Home: React.FC<props> = ({ navigation }) => {
    const [data, setData] = useState<
        {id : number; hotel: string; RNO: number; ARR: number; RNA: number; RR: number }[]
    >([]);

    const [head, setHead] = useState(["Hotel", "RNO", "ARR", "RNA", "RR"]);

    // Get data lewat api
    const fetchData = async () => {
        const response = await fetch("http://192.168.94.220:8000/data");
        const data = await response.json();
        setData(data);
    };

    // komponen did amount
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

            <View style={styles.contentCon}>
                <Table
                    borderStyle={{
                        borderColor: "#111",
                        borderLeftWidth: 1,
                        borderRightWidth: 2,
                    }}>
                    <Row data={head} style={{ backgroundColor: "red" }} />
                    {data.map((item, index) => {
                        const {id, ...rest} = item
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    navigation.navigate("Update", {
                                        id: item.id, data: rest 
                                    })
                                }>
                                <Rows
                                    key={index}
                                    data={[Object.values(rest)]}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </Table>
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
        justifyContent: "space-around",
        marginBottom: 30,
    },
    contentCon: {
        width: 400,
        borderWidth: 2,
        marginHorizontal: 5,
        borderRadius: 2,
    },
});

export default Home;
