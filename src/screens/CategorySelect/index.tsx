import React from "react";
import { FlatList } from "react-native";
import { categories } from "../../utils/categories";
import { Container, Category, Header, Title, Icon, Name, Separator } from "./styles";

interface CategorySelectProps {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (category: CategorySelectProps) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
            <Category>
                <Icon name={item.icon} />
                <Name>{item.name}</Name>
            </Category>
        )}
            ItemSeparatorComponent={() => <Separator />}
      />
      
    </Container>
  );
}
