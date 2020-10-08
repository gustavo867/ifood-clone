import styled from "styled-components/native";

export const CategoryImageContainer = styled.View`
  border-radius: 5px;
  margin: 10px;
  width: 84px;
  height: 61px;
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
`;

export const CategoryText = styled.Text`
  color: #fff;
  opacity: 0.7;
`;

export const CategoryContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
