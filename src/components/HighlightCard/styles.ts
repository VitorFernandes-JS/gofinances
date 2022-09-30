import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    margin-right: 16px;
    padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    width: 56px;
    height: 56px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.View`
    width: 100%;
    margin-top: 20px;
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text};
`;




