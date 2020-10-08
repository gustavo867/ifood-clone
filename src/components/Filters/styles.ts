import styled from "styled-components/native";

interface Props {
  value: number;
}

export const FiltersScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-grow: 0;
  margin-top: ${(props: Props) => (props.value < 50 ? -5 : 20)}px;
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  delayPressIn: 1,
})`
  width: 130px;
  height: 40px;
  border-radius: 20px;
  border-color: #ccc;
  border-width: 0.2px;
  margin: 15px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const FilterText = styled.Text`
  color: #fff;
  font-size: 12px;
  opacity: 0.9;
`;
