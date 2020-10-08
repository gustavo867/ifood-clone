import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const CategoryImageContainer = styled.View`
  border-radius: 5px;
  margin: 10px;
  width: ${width * 0.4}px;
  height: ${height * 0.1}px;
`;

export const CategoriesList = styled.FlatList`
  flex-grow: 1;
`;

export const CategoryText = styled.Text`
  color: #fff;
  opacity: 0.7;
`;

export const CategoryContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #7777;
  margin-top: 14px;
`;
