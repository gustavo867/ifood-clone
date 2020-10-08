import React, { useState } from "react";
import Input from "../../components/Input";
import CategoryList from "./CategoryList";
import * as S from "./styles";

const Search: React.FC = () => {
  const [item, setItem] = useState<string>("");

  return (
    <S.Container>
      <Input
        label="item ou loja"
        onChangeText={(text) => setItem(text)}
        value={item}
      />
      <CategoryList name={item} />
    </S.Container>
  );
};

export default Search;
