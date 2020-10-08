import React from "react";
import { ImageSourcePropType } from "react-native";
import CategoryItem from "./components/CategoryItem";
import * as S from "./styles";

import categories from "../../utils/categories";

export interface Category {
  id: number;
  image: ImageSourcePropType;
  title: string;
  color: string;
}

const Categories: React.FC = () => {
  return (
    <S.CategoriesList
      alwaysBounceVertical={false}
      keyExtractor={(item: any) => String(item.id).trim()}
      renderItem={({ item }: any) => <CategoryItem item={item} />}
      data={categories}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default Categories;
