import React from "react";
import restaurants from "../../utils/restaurants";
import { AntDesign } from "@expo/vector-icons";
import { Item } from "../Famous";
import * as S from "./styles";

const Stores: React.FC = () => {
  const Item = (item: Item) => {
    return (
      <S.Card>
        <S.Background color={item.color} />
        <S.StoreInfo>
          <S.StoreName>{item.name}</S.StoreName>
          <S.InfoContainer>
            <AntDesign name="star" size={13} color="#FFD449" />
            <S.StarText>{item.rate}</S.StarText>
            <S.SmallCircle />
            <S.InfoText>{item.category}</S.InfoText>
            <S.SmallCircle />
            <S.InfoText>{item.km}</S.InfoText>
          </S.InfoContainer>
          <S.TimeContainer>
            <S.InfoText>{item.time}</S.InfoText>
            <S.SmallCircle />
            <S.InfoText price={item.price}>{item.price}</S.InfoText>
          </S.TimeContainer>
        </S.StoreInfo>
      </S.Card>
    );
  };

  return (
    <S.StoresList
      alwaysBounceVertical={false}
      keyExtractor={(item: any) => String(item.id).trim()}
      renderItem={({ item }: any) => <Item {...item} />}
      data={restaurants}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default Stores;
