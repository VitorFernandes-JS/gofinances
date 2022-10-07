import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7,
    })`
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 8px 0;
    border-radius: 5px;
    align-items: center;
    padding: 18px 16px;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    flex-direction: row;
    color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.text};
`;