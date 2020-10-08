import React from "react";
import * as S from "./styles";

const BiggerCupons: React.FC = () => {
  return (
    <S.Container>
      <S.Cupon>
        <S.PromotionText>Almoço </S.PromotionText>
        <S.PromotionText>a partir</S.PromotionText>
        <S.PromotionText>10 R$</S.PromotionText>
      </S.Cupon>
      <S.RightContainer>
        <S.TagText>Entrega </S.TagText>
        <S.SecondTagText>Gratis</S.SecondTagText>
      </S.RightContainer>
    </S.Container>
  );
};

export default BiggerCupons;
