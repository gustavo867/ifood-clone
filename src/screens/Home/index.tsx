import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import * as S from "./styles";

import Filters from "../../components/Filters";
import Categories from "../../components/Categories";
import Cupons from "../../components/Cupons";

const Home: React.FC = () => {
  const [city, setCity] = useState("Sua rua");
  const [visible, setVisible] = useState(true);

  return (
    <S.Container>
      {visible && (
        <S.BetweenRow>
          <S.SelectCityButton>
            <S.SelectCity>{city}</S.SelectCity>
            <Ionicons name="ios-arrow-down" size={18} color="red" />
          </S.SelectCityButton>
          <S.QrCodeButton>
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="red" />
          </S.QrCodeButton>
        </S.BetweenRow>
      )}
      <S.Scroll
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Filters visible={visible} />
        <Categories />
        <Cupons />
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
