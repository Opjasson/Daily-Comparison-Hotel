import Button from '@/app/Components/Moleculs/Button';
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native';

interface props {
  navigation : NavigationProp<any,any>
}

const inputData: React.FC<props> = ({navigation}) => {
  return (
      <View style={styles.container}>
          <View style={styles.navbar}>
              <Text style={styles.textNav}>Input</Text>
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
      </View>
  );
}

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
    },
});


export default inputData
