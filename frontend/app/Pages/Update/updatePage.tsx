import {
    NavigationProp,
    RouteProp,
    useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Alert,
    StatusBar,
} from "react-native";
import Button from "@/app/Components/Moleculs/Button";
import { Picker } from "@react-native-picker/picker";


interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const updatePage: React.FC<props> = ({ navigation, route }) => {
    // Get id menggunakan params di previos page
    const index = route.params?.id;
    const sendData = route.params?.data;

    // State = Penyimpanan data sementara
    const [data, setData] = useState(sendData);

    const [hotel, setHotel] = useState(sendData.hotel);
    const [RNO, setRNO] = useState<number>(sendData.RNO);
    const [ARR, setARR] = useState<number>(sendData.ARR);
    const [RNA, setRNA] = useState<number>(sendData.RNA);
    const [RR, setRR] = useState<number>(sendData.RR);
    // End state

    // Pemberian Type data (Interface)
    interface props {
        navigation: NavigationProp<any, any>;
    }

    interface RootStackParamList {
        Home: undefined;
    }
    // End Interface

    // Handle alert sesudah berhasil update
    const pindahHal = useNavigation<NavigationProp<RootStackParamList>>();
    const info = () => {
        Alert.alert("Data Berhasil Dirubah", "Kembali Ke Home", [
            {
                text: "Home",
                onPress: () => pindahHal.navigate("Home"),
                style: "default",
            },
        ]);
    };


    // Handle deleteButton
    const handleDelette = async () => {
        try {
            await fetch(`http://192.168.217.220:8000/data/${index}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            info()
        } catch (error) {
            alert("Ups ada error.");
        }
    };

    // Handle updateButton
    const sendUpdate = async () => {
        try {
            const response = await fetch(
                `http://192.168.217.220:8000/data/${index}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        hotel: hotel,
                        RNO: RNO,
                        ARR: ARR,
                        RNA: RNA,
                    }),
                }
            );
            const json = await response.json();
            setData(json);
        } catch (error) {
            alert("ada error nih");
        }
        info();
    };

    useEffect(() => {}, []);

    return (
        <View style={styles.container}>
              <StatusBar backgroundColor="#c9b91a" barStyle="light-content" />
            <View style={styles.navbar}>
                <Text style={styles.textNav}>Update</Text>
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

            {/* Form Update */}
            <ScrollView>
                <View style={styles.containerForm}>
                    <Text style={styles.textLabel}>Hotel</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            marginBottom: 5,
                            borderRadius: 5,
                        }}>
                        <Picker
                            selectedValue={hotel}
                            onValueChange={(value, index) => setHotel(value)}>
                            <Picker.Item
                                value={data.hotel}
                                label={data.hotel}
                            />
                            <Picker.Item value={"Premier"} label="Premier" />
                            <Picker.Item
                                value={"Riez Palace"}
                                label="Riez Palace"
                            />
                            <Picker.Item value={"Karlita"} label="Karlita" />
                            <Picker.Item
                                value={"Bahari Inn"}
                                label="Bahari Inn"
                            />
                            <Picker.Item
                                value={"Prime Biz"}
                                label="Prime Biz"
                            />
                            <Picker.Item value={"Khas"} label="Khas" />
                            <Picker.Item value={"Plaza"} label="Plaza" />
                            <Picker.Item value={"Kotta Go"} label="Kotta Go" />
                        </Picker>
                    </View>

                    <Text style={styles.textLabel}>RNO</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            marginBottom: 5,
                            borderRadius: 5,
                        }}
                        onChangeText={(text) => setRNO(Number(text))}
                        keyboardType="numeric"
                        placeholder="RNO"
                        value={`${RNO}`}
                    />

                    <Text style={styles.textLabel}>ARR</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            marginBottom: 5,
                            borderRadius: 5,
                        }}
                        onChangeText={(text) => setARR(Number(text))}
                        value={`${ARR}`}
                        keyboardType="numeric"
                        placeholder="ARR"
                    />

                    <Text style={styles.textLabel}>RNA</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            marginBottom: 5,
                            borderRadius: 5,
                        }}
                        onChangeText={(text) => setRNA(Number(text))}
                        placeholder="RNA"
                        keyboardType="numeric"
                        value={`${RNA}`}
                    />

                    <Text style={styles.textLabel}>RR</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            marginBottom: 5,
                            borderRadius: 5,
                        }}
                        // onChangeText={(text) => setRR(sendData.RR)}
                        placeholder="RR"
                        keyboardType="numeric"
                        value={`${RR}`}
                    />
                </View>
                {/* End Form */}

                <Button
                    aksi={sendUpdate}
                    style={[
                        styles.button,
                        { marginHorizontal: "auto", width: 190, marginTop: 10 },
                    ]}
                    children="Kirim"
                />

                <Button
                    aksi={handleDelette}
                    style={[
                        styles.button,
                        {
                            marginHorizontal: "auto",
                            width: 190,
                            marginTop: 10,
                            backgroundColor: "red",
                        },
                    ]}>
                    Delete
                </Button>
            </ScrollView>
        </View>
    );
};

// pemberian style/gaya supaya lebih menarik dan hidup
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
    containerForm: {
        paddingHorizontal: 5,
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
    textLabel: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 3,
    },
});

export default updatePage;
