import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface Props {
  title: string;
  info: string;
}

const CuponCard: React.FC<Props> = ({ title, info }) => {
  return (
    <S.Container>
      <S.Button>
        <MaterialCommunityIcons name="gift" size={32} color="#B86C6C" />
      </S.Button>
      <S.Wrapper>
        <S.RightContainer>
          <S.TopText>{title}</S.TopText>
          <S.BottomText>{info}</S.BottomText>
        </S.RightContainer>
        <S.Button>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#787878"
          />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default CuponCard;
