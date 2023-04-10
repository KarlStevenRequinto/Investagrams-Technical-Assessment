import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import DetailsScreen from "../screens/DetailsScreen";
import WatchlistScreen from "../screens/WatchlistScreen";

import { Octicons, Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      barStyle={{
        backgroundColor: "#242A32",
        borderTopWidth: 1,
        borderTopColor: "white",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bookmark" size={20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;