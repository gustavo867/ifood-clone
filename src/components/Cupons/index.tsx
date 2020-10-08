import React, { useState, useCallback } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import BiggerCupons from "../BiggerCupons";
import Circles from "./Circles/Circles";
import * as S from "./styles";

const { width } = Dimensions.get("window");

const Cupons: React.FC = () => {
  const [currentIndex, setIndex] = useState(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(
        (event.nativeEvent.contentOffset.x / width) * 0.9
      );

      if (index !== currentIndex) {
        setIndex(index);
      }
    },
    [currentIndex]
  );

  return (
    <S.Container>
      <S.Scroll
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <BiggerCupons />
        <BiggerCupons />
        <BiggerCupons />
        <BiggerCupons />
      </S.Scroll>
      <Circles index={currentIndex} />
    </S.Container>
  );
};

export default Cupons;
