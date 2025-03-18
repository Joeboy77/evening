import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function BottomTabs() {
  return (
  <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Profile' component={Profile}/>
  </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name='MainTabs' component={BottomTabs}/>
    <Stack.Screen name='Details' component={Details}/>
  </Stack.Navigator>
  )
}

function DrawerNavigator() {
  return(
  <Drawer.Navigator>
    <Drawer.Screen name='Home' component={StackNavigator}/>
    <Drawer.Screen name='Settings' component={Settings}/>
  </Drawer.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
