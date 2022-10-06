// importações nativas
import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
// componentes
import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
// libs
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleRegister(form: FormData) {
    if (!transactionType) return;
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  const { control, handleSubmit } = useForm();

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm placeholder="Nome" name="name" control={control}/>
          <InputForm placeholder="Preço" name="amount" control={control}/>
          <TransactionsTypes>
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("up")}
              title="Entrada"
              type="up"
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("down")}
              title="Saída"
              type="down"
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>
            <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
           category={category}
           setCategory={setCategory}
           closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
