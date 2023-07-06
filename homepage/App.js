import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./view/homepage";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AgentDetail from "./view/partnerDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserCart from "./view/userCart";
import { Provider } from "react-redux";
import store from "./store/index.js";
// import { Login } from './screens/Login'
// import { Signup } from "./screens/Signup";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={ store }>
    <NavigationContainer>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Stack.Navigator
          initialRouteName="Welcome"
        >
          {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        /> */}
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="AgentDetail" component={AgentDetail} />
          <Stack.Screen name="UserCart" component={UserCart} />
        </Stack.Navigator>
      </IconComponentProvider>
    </NavigationContainer>
    </Provider>

  );
}
