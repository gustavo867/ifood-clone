import styled from "styled-components/native";

import { Theme } from "../Login/styles";

export const Container = styled.SafeAreaView`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
  padding-top: 40px;
`;

export const Scroll = styled.ScrollView`
  
`;

export const SelectCityButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SelectCity = styled.Text`
  color: #fff;
  margin-left: 25px;
  font-size: 22px;
  margin-right: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BetweenRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QrCodeButton = styled.TouchableOpacity`
  margin-right: 25px;
  margin-top: 5px;
`;
