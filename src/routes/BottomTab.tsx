import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Home from "../screens/Home";
import Search from "../screens/Search";
import Request from "../screens/Requests";
import Profile from "../screens/Profile";

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 74,
          backgroundColor: "#141414",
          opacity: 0.99,
        },
        tabStyle: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontSize: 13,
        },
        inactiveTintColor: "#CCC",
        activeTintColor: "#FFF",
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="Inicío"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Busca"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Request}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="bookmark-border" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="person-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
