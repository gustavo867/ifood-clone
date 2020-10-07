import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import BottomTab from "./BottomTab";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="AuthStack" component={AuthStack} />
        <Screen name="BottomTab" component={BottomTab} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
