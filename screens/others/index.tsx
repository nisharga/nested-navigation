import { useAuth } from "@/AuthContext";
import { Button, Text, View } from "react-native";

export const FeedScreen = () => {
  return (
    <View>
      <Text>FeedScreen</Text>
    </View>
  );
};

export const HomeStackNavigator = ({ navigation }: any) => {
  return (
    <View>
      <Text>HomeStackNavigator</Text>
      <Button
        title="Go to News"
        onPress={() =>
          navigation.navigate("TopTabs", {
            screen: "News", // Navigate to the News screen
            params: { message: "Data from MainTabs!" }, // Pass data
          })
        }
      />
    </View>
  );
};

export const NewsScreen = ({ route }: any) => {
  /* const { message } = route.params; */
  console.log(route.params);
  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  );
};

export const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export const SettingsScreen = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export const TrendingScreen = () => {
  return (
    <View>
      <Text>TrendingScreen</Text>
    </View>
  );
};
