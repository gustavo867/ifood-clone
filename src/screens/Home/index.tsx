import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import * as S from "./styles";
import Filters from "../../components/Filters";

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
      <Filters visible={visible} />
      <Text>Hello</Text>
    </S.Container>
  );
};

export default Home;
