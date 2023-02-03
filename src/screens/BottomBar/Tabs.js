import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BGC, BGRDRK } from '../../Utils/Import';
import Home from '../Home/Home';
import Requests from '../Requests/Requests';
import AddProduct from '../AddProduct/AddProduct';
import Orders from '../Orders/Orders';
import Profile from '../Profile/Profile';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGRDRK : "gray"} name="home" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
        <Tab.Screen name="Requests" component={Requests}
        options={{
            tabBarLabel: 'Requests',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGRDRK : "gray"} name="clock-time-nine-outline" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
        <Tab.Screen name="AddProduct" component={AddProduct}
        options={{
            tabBarLabel: 'Add Product',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons size={25} color={focused ? BGRDRK : "gray"} name="add-box" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
        <Tab.Screen name="Orders" component={Orders}
        options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGRDRK : "gray"} name="order-bool-descending" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGRDRK : "gray"} name="account-outline" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
      </Tab.Navigator>
  );
}