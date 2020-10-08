import React from "react";
import { Category } from "../index";
import * as S from "../styles";

interface Props {
  item: Category;
}

const CategoryItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <S.CategoryContainer>
      <S.CategoryImageContainer
        style={{
          backgroundColor: item.color,
        }}
      />
      <S.CategoryText>{item.title}</S.CategoryText>
    </S.CategoryContainer>
  );
};

export default CategoryItem;
