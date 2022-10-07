// importações nativas
import React, { useState, useEffect } from "react";
import { Alert, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .transform((_value, originalValue) =>
      Number(originalValue.replace(/,/, "."))
    ) //converte a virgula em ponto
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório"),
});

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const navigation = useNavigation();
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const dataKey = "@gofinances:transactions";
  
  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  };

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  };

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {

    if (!transactionType)
      return Alert.alert("Ops, você esqueceu de selecionar o tipo da transação!");

    if (category.key === "category")
      return Alert.alert("Ops, você esqueceu de selecionar a categoria!");

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey); //pega os dados do storage
      const currentData = data ? JSON.parse(data) : []; // se tiver dados, converte para objeto, se não, retorna um array vazio
      
      const dataFormatted = [...currentData, newTransaction]; // concatena o novo objeto com o array de objetos
      
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted)); // salva os dados no storage

      reset(); // limpa os campos do formulário
      setTransactionType(""); // limpa os campos do formulário
      setCategory({
        key: "category",
        name: "Categoria",
      }); // limpa os campos do formulário

      navigation.navigate("Listagem"); // navega para a tela de listagem

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível cadastrar");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              placeholder="Nome"
              name="name"
              control={control}
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              placeholder="Preço"
              name="amount"
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
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
            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
