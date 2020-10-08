import styled from "styled-components/native";
import { Theme } from "../Login/styles";

export const Container = styled.SafeAreaView`
  background-color: ${(props: Theme) => props.theme.background};
  flex: 1;
  padding-top: 50px;
`;
