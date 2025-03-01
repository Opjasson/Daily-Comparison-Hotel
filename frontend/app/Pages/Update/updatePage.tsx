import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "@/app/Components/Moleculs/Button";
import { Picker } from "@react-native-picker/picker";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const updatePage: React.FC<props> = ({ navigation, route }) => {
    const [number, setNumber] = useState<number | any>();
    const [number1, setNumber1] = useState<number | any>();
    const index = route.params?.index;

    const hitung = () => {
        alert(`hasil : ${index}`);
    };

    const getById = fetch("http://192.168.94.220:8000/data");
    // useEffect(() => {
    //   alert(`Nomor ${index}`)
    // })
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.textNav}>Update</Text>
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

            {/* Form Update */}
            <View>
                <Picker>
                    <Picker.Item value={"Premier"} label="Premier" />
                    <Picker.Item value={"Riez Palace"} label="Riez Palace" />
                    <Picker.Item value={"Karlita"} label="Karlita" />
                    <Picker.Item value={"Bahari Inn"} label="Bahari Inn" />
                    <Picker.Item value={"Prime Biz"} label="Prime Biz" />
                    <Picker.Item value={"Khas"} label="Khas" />
                    <Picker.Item value={"Plaza"} label="Plaza" />
                    <Picker.Item value={"Kotta Go"} label="Kotta Go" />
                </Picker>
                <TextInput
                    keyboardType="numeric"
                    onChange={(num) =>
                        setNumber(parseInt(num.nativeEvent.text))
                    }
                    placeholder="RNO"
                />
                <TextInput
                    keyboardType="numeric"
                    onChange={(num) =>
                        setNumber1(parseInt(num.nativeEvent.text))
                    }
                    placeholder="ARR"
                />
                <TextInput placeholder="RNA" />
                <TextInput placeholder="RR" />

                <Button aksi={hitung} style={styles.button} children="Kirim" />
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
});

export default updatePage;
