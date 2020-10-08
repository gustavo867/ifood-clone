import styled from "styled-components/native";
import { Theme } from "../Login/styles";

export const Container = styled.View`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
`;
