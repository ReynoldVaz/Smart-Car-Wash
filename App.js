import React from "react";
import {Provider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {theme} from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AreaScreen,
  CarTypeScreen,
  HomeScreen,
  CarCentreScreen,
  HomeScreenTrial,
  Dashboard,
  Privacy,
  Profile,
  Help,
  SignOut,
} from "./src/screens";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="PrivacyPolicy" component={Privacy} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="AreaScreen" component={AreaScreen} />
          <Stack.Screen name="CarTypeScreen" component={CarTypeScreen} />
          {/* <Stack.Screen name="HomeScreenTrial" component={HomeScreenTrial} /> */}

          <Stack.Screen name="CarCentreScreen" component={CarCentreScreen} />

          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />

          <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
