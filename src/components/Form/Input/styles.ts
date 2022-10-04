import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput).attrs({
    placeholderTextColor: "#7a7a80"
})`
width: 100%;
    height: 60px;
    padding: 16px 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 8px;
`;