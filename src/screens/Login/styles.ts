import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

interface Background {
  background: string;
  color: string;
}

export interface Theme {
  theme: Background;
}

export const Container = styled.View`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
`;

export const GoogleButton = styled(RectButton)`
  align-self: center;
  background-color: #4d4dff;
  opacity: 0.8;
  width: ${width * 0.85}px;
  height: 63px;
  border-radius: 12px;
  margin-top: -25px;
  flex-direction: row;
  align-items: center;
`;

export const GoogleLogoContainer = styled.View`
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const GoogleLogo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 30px;
  height: 30px;
`;

export const GoogleText = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  opacity: 0.9;
  margin-left: 40px;
`;

export const Title = styled.Text`
  color: ${(props: Theme) => props.theme.color};
  font-size: 44px;
`;

export const Background = styled.Image.attrs({
  resizeMode: "cover",
  blurRadius: 0.8,
})`
  width: ${width}px;
  height: ${height * 0.75}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  align-self: center;
  top: ${height * 0.25}px;
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 2;
`;

export const AbsoluteContainer = styled.View`
  position: absolute;
  z-index: 1;
  bottom: ${height * 0.45}px;
  width: ${width * 0.7}px;
  flex: 1;
  align-self: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: #fff;
  opacity: 0.6;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const SubText = styled.Text`
  color: #fff;
  opacity: 0.8;
  text-align: center;
  margin-top: 15px;
  letter-spacing: 0.4px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 55px;
  align-self: center;
  width: ${width * 0.85}px;
  border-color: #a9a9a9;
  border-width: 0.3px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const EnterButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const TextOpacity = styled.Text`
  color: #fff;
  opacity: 0.3;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.4px;
`;
