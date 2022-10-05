import React from 'react';
import { Category, Container, Icon } from './styles';

interface Props {
    title: string;
}

export function CategorySelectButton({ title }: Props) {
  return (
    <Container>
        <Category>{title}</Category>
        <Icon name="chevron-down"/>
    </Container>
  )
}