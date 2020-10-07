import React from "react";

import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
}

const Filters: React.FC<Props> = ({ visible }: Props) => {
  return (
    <S.FiltersScroll
      visible={visible}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <S.FilterButton>
        <S.FilterText>Filtros</S.FilterText>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-menu"
          size={24}
          color="#FFF"
        />
      </S.FilterButton>
      <S.FilterButton>
        <Ionicons
          style={{ marginRight: 5 }}
          name="ios-walk"
          size={20}
          color="#FFF"
        />
        <S.FilterText>Para entrega</S.FilterText>
      </S.FilterButton>
      <S.FilterButton>
        <S.FilterText>Tipo de loja</S.FilterText>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-arrow-down"
          size={20}
          color="#FFF"
        />
      </S.FilterButton>
      <S.FilterButton>
        <S.FilterText>Ordernar</S.FilterText>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-arrow-down"
          size={20}
          color="#FFF"
        />
      </S.FilterButton>
      <S.FilterButton>
        <S.FilterText>Entrega grátis</S.FilterText>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-arrow-down"
          size={20}
          color="#FFF"
        />
      </S.FilterButton>
      <S.FilterButton>
        <S.FilterText>Vale refeição</S.FilterText>
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-arrow-down"
          size={20}
          color="#FFF"
        />
      </S.FilterButton>
    </S.FiltersScroll>
  );
};

export default Filters;
