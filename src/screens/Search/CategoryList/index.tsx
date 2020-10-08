import React from "react";
import { Category } from "../../../components/Categories";
import categories from "../../../utils/categories";
import * as S from "./styles";

interface Props {
  name: string;
}

const CategoryList: React.FC<Props> = ({ name }) => {
  const CategoryItem = (item: Category) => {
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

  const Header = () => {
    return <S.HeaderText>Categorias</S.HeaderText>;
  };

  return (
    <S.CategoriesList
      alwaysBounceVertical={false}
      keyExtractor={(item: any) => String(item.id).trim()}
      renderItem={({ item }: any) => <CategoryItem {...item} />}
      data={categories.filter((category) => {
        return category.title.includes(name!);
      })}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      numColumns={2}
      ListHeaderComponent={() => <Header />}
    />
  );
};

export default CategoryList;
