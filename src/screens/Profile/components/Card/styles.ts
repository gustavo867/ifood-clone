import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex-direction: row;
  width: ${width}px;
  height: ${height * 0.15}px;
  align-items: center;
  border-bottom-color: #191919;
  border-bottom-width: 1.5px;
  elevation: 2;
  padding: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Button = styled(RectButton)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.View`
  flex-direction: column;
  padding: 10px;
`;

export const ProfileImage = styled.Image`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  margin-right: 16px;
`;

export const TopText = styled.Text`
  font-size: 18px;
  color: #a3a3a3;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

export const BottomText = styled.Text`
  font-size: 15px;
  color: #6d6d6d;
  font-weight: 600;
`;
