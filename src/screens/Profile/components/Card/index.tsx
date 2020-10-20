import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import IconName from "./IconName";
import * as S from "./styles";

interface Props {
  title: string;
  info: string;
}

const Card: React.FC<Props> = ({ title, info }) => {
  return (
    <S.Container>
      <IconName icon={title} />
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

export default Card;
