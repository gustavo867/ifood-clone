import styled from "styled-components/native";
import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";

import { Theme } from "../Login/styles";

export const Container = styled.SafeAreaView`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
  padding-top: ${Platform.OS === "android" ? Constants.statusBarHeight : 0}px;
`;

export const Scroll = styled(Animated.ScrollView)`
  flex-grow: 1;
`;

export const SelectCityButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SelectCity = styled.Text`
  color: #fff;
  margin-left: 25px;
  font-size: 16px;
  margin-right: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BetweenRow = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const QrCodeButton = styled.TouchableOpacity`
  margin-right: 15px;
  margin-top: 5px;
`;
