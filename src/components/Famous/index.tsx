import React from "react";
import restaurants from "../../utils/restaurants";
import * as S from "./styles";

export interface Item {
  name: string;
  id: number;
  color: string;
  rate: number;
  category: string;
  time: string;
  price: string;
  km: string;
}

const Famous: React.FC = () => {
  const Item = (item: Item) => {
    return (
      <S.Card>
        <S.Background color={item.color} />
        <S.CardText>{item.name}</S.CardText>
      </S.Card>
    );
  };

  return (
    <S.Container>
      <S.RowBetween>
        <S.Text>Famosos no ifood</S.Text>
        <S.RedText>Ver mais</S.RedText>
      </S.RowBetween>
      <S.ScrollHorizontal
        alwaysBounceVertical={false}
        keyExtractor={(item: any) => String(item.id).trim()}
        renderItem={({ item }: any) => <Item {...item} />}
        data={restaurants}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default Famous;
