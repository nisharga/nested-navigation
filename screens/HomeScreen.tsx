import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "HomeScreen"
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            title: "Item Details",
          });
        }}
      />
    </View>
  );
};
