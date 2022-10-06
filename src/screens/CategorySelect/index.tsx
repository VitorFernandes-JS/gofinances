import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";
import {
  Container,
  Category,
  Header,
  Title,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

interface CategorySelectProps {
  key: string;
  name: string;
}

interface Props {
  category: CategorySelectProps;
  setCategory: (category: CategorySelectProps) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(category: CategorySelectProps) {
    setCategory(category);
  }

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
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button
          title={category}
          onPress={closeSelectCategory} 
        />
      </Footer>
    </Container>
  );
}
