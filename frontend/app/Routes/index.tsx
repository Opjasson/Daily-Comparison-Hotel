import React from "react";
import { View } from "react-native";
import {} from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Input, Ranking, splashScreen } from "../Pages";

const Stack = createStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={splashScreen} />
        </Stack.Navigator>
    );
};

export default Route;
