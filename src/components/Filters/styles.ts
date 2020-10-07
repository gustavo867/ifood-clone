import styled from "styled-components/native";

interface Props {
  visible: boolean;
}

export const FiltersScroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  margin-top: ${(props: Props) => (props.visible ? 20 : 0)}px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  border-color: #ccc;
  border-width: 0.6px;
  margin: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FilterText = styled.Text`
  color: #fff;
  font-size: 13px;
  opacity: 0.9;
`;
