import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface Props {
  title: string;
  info: string;
}

import profilePic from "../../../../assets/profile.jpg";

const ProfileCard: React.FC<Props> = ({ title, info }) => {
  return (
    <S.Container>
      <S.ProfileImage source={profilePic} />
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

export default ProfileCard;
