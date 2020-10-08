import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

interface Props {
  color?: string;
  price?: string;
}

export const Container = styled.View``;

export const StoresList = styled.FlatList`
  flex-grow: 0;
`;

export const Card = styled.View`
  height: ${height * 0.12}px;
  width: ${width * 0.9}px;
  margin: 10px;
  flex-direction: row;

  align-items: center;
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 0.4px;
  border-radius: 8px;
`;

export const Background = styled.View`
  background-color: ${(props: Props) => props?.color};
  width: 15%;
  height: 60%;
  border-radius: 2px;
  margin-left: 25px;
`;

export const StoreName = styled.Text`
  color: #808080;
  font-size: 15px;
  line-height: 18px;
`;

export const StoreInfo = styled.View`
  margin-left: 25px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StarText = styled.Text`
  color: #ffd449;
  font-size: 13px;
  font-weight: 600;
  padding-left: 5px;
`;

export const SmallCircle = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-left: 5px;
`;

export const InfoText = styled.Text`
  color: ${(props: Props) => (props?.price === "Grátis" ? "green" : "#fff")};
  font-size: 12px;
  margin-left: 5px;
  opacity: ${(props: Props) => (props?.price === "Grátis" ? 1.0 : 0.4)};
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;
