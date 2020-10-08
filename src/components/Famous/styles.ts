import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.View`
  margin-top: 10px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #fff;
  font-weight: bold;
  padding-left: 15px;
`;

export const RedText = styled.Text`
  font-size: 16px;
  letter-spacing: 0.4px;
  color: red;
  font-weight: 500;
  padding-right: 15px;
`;

export const ScrollHorizontal = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
`;

export const Card = styled.View`
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.View`
  background-color: ${(props: Props) => props.color};
  width: 84px;
  height: 64px;
  border-radius: 2px;
`;

export const CardText = styled.Text`
  color: #fff;
  opacity: 0.8;
`;
