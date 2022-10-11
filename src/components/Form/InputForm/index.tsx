// importações nativas
import React from "react";
import { Container, Error } from "./styles";
import { TextInputProps } from "react-native";
// componentes
import { Input } from "../Input";
// libs
import { Control, Controller } from "react-hook-form";
interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: any;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
          onChangeText={onChange} 
          value={value} 
          {...rest} 
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
