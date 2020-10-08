import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import * as S from "./styles";

import Filters from "../../components/Filters";
import Categories from "../../components/Categories";
import Cupons from "../../components/Cupons";
import Famous from "../../components/Famous";
import Stores from "../../components/Stores";

const Home: React.FC = () => {
  const [city, setCity] = useState("Sua rua");

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 50], [30, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <S.Container>
      <S.BetweenRow style={headerStyle}>
        <S.SelectCityButton>
          <S.SelectCity>{city}</S.SelectCity>
          <Ionicons name="ios-arrow-down" size={15} color="red" />
        </S.SelectCityButton>
        <S.QrCodeButton>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color="#AF4D52"
          />
        </S.QrCodeButton>
      </S.BetweenRow>

      <Filters value={scrollY.value} />
      <S.Scroll onScroll={scrollHandler} scrollEventThrottle={16}>
        <Categories />
        <Cupons />
        <Famous />
        <Stores />
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
