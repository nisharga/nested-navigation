import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth } from "../AuthContext";
import { SignInScreen } from "../screens/SignInScreen";
import { RootStackParamList } from "../types";
import {
  FeedScreen,
  HomeStackNavigator,
  NewsScreen,
  ProfileScreen,
  SettingsScreen,
  TrendingScreen,
} from "@/screens/others";
import { Text } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

// Bottom Tab Navigator
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeStack" component={HomeStackNavigator} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

// Material Top Tabs
function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={FeedScreen} />
      <TopTab.Screen name="Trending" component={TrendingScreen} />
      <TopTab.Screen name="News" component={NewsScreen} />
    </TopTab.Navigator>
  );
}

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="TopTabs" component={TopTabNavigator} />
    </Drawer.Navigator>
  );
}

// Root Navigator
export function RootNavigator() {
  const { isLogin } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLogin ? (
        <Stack.Screen name="Auth" component={SignInScreen} />
      ) : (
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
}
