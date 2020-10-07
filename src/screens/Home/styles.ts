import styled from "styled-components/native";

import { Theme } from "../Login/styles";

interface Props {
  visible: boolean;
}

export const Container = styled.SafeAreaView`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
  padding-top: 40px;
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

export const FiltersScroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  margin-top: ${(props: Props) => (props.visible ? 20 : 0)}px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border-color: #ccc;
  border-width: 1px;
  margin: 15px;
  align-items: center;
  justify-content: center;
`;

export const FilterText = styled.Text`
  color: #fff;
  opacity: 0.8;
`;
