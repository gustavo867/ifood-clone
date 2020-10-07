import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import loginBackground from "../../assets/login-background.jpg";
import logo from "../../assets/ifood-logo.png";
import googleLogo from "../../assets/google.png";

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Background source={loginBackground} />
      <S.Logo source={logo} />
      <S.AbsoluteContainer>
        <S.Text>Falta pouco para matar sua fome!</S.Text>
        <S.SubText>Como deseja continuar?</S.SubText>
      </S.AbsoluteContainer>
      <S.GoogleButton onPress={() => navigate("BottomTab")}>
        <S.GoogleLogoContainer>
          <S.GoogleLogo source={googleLogo} />
        </S.GoogleLogoContainer>
        <S.GoogleText>Continuar com o google</S.GoogleText>
      </S.GoogleButton>
      <S.Button>
        <S.TextButton>Outras opções</S.TextButton>
      </S.Button>
      <S.EnterButton>
        <S.TextOpacity>Continuar como convidado</S.TextOpacity>
      </S.EnterButton>
    </S.Container>
  );
};

export default Login;
