import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export function Dashboard() {
  const data = [{
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  }];


  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/Vitor-php.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Vitor</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="19.000,50" lastTransaction="Última entrada dia 13 de abril"/>
        <HighlightCard type="down" title="Saídas" amount="3.000,55" lastTransaction="Última entrada dia 17 de abril"/>
        <HighlightCard type="total" title="Total" amount="23.000,50" lastTransaction="01 à 06 de Abril"/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
        data={data}
        renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
