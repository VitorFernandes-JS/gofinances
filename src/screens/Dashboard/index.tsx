import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
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
  LogoutButton, 
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/04/2020",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "10/04/2020",
    },
  ];

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
          <LogoutButton onPress={() =>{}}>
          <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="19.000,50"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="3.000,55"
          lastTransaction="Última entrada dia 17 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="23.000,50"
          lastTransaction="01 à 06 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
