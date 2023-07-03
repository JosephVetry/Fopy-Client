import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./view/homepage";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AgentDetail from "./view/partnerDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserCart from "./view/userCart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="AgentDetail" component={AgentDetail} />
          <Stack.Screen name="UserCart" component={UserCart} />
        </Stack.Navigator>
      </IconComponentProvider>
    </NavigationContainer>
  );
}
