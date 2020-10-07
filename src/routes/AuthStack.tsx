import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Login from "../screens/Login";

const AuthStack: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;
