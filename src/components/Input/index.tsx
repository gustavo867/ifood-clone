import React, { useRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

interface Props extends TextInputProps {
  label: string;
}

const Input: React.FC<Props> = ({ label, ...rest }: Props) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <S.Container>
      <Ionicons
        style={{ marginLeft: 15 }}
        name="ios-search"
        size={30}
        color="#AA1520"
      />
      <S.Input
        ref={inputRef}
        placeholder={label}
        value={inputRef.current?.props?.value}
        placeholderTextColor="#7777"
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
