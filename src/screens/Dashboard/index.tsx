import React from "react";
import {
  Container,
  Header,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo source={{ uri: 'https://github.com/Vitor-php.png' }} />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Lucas</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  )
}
