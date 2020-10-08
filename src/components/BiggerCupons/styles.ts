import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: ${width * 0.9}px;
  height: ${height * 0.23}px;
  flex-direction: row;
  background-color: #f5f749;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  margin: 15px;
`;

export const Cupon = styled.View`
  flex-direction: column;
`;

export const RightContainer = styled.View`
  height: 25%;
  width: 49%;
  background-color: #04d361;
  align-items: center;
  justify-content: center;
  transform: rotateY(0deg) rotateX(0deg) rotateZ(-90deg);
  flex-direction: row;
  right: -65px;
  opacity: 0.8;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const TagText = styled.Text`
  text-transform: uppercase;

  text-align: center;
  font-size: 18px;
`;

export const SecondTagText = styled.Text`
  text-transform: uppercase;

  text-align: center;

  font-size: 18px;
`;

export const PromotionText = styled.Text`
  color: #000;
  font-size: 18px;
  margin-left: 25px;
`;
