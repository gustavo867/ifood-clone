import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  align-self: center;
  width: ${width * 0.9}px;
  height: 65px;
  border-radius: 8px;
  background-color: #1a1a1a;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  opacity: 0.8;
  color: #fff;
  padding-left: 15px;
  width: ${width * 0.7}px;
`;
