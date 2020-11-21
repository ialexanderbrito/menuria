import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Container, Content } from './styles';

import Orders from './components/Orders';

import logo from './assets/logo.png';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <img src={logo} alt="Menuria" />
          <Orders />
        </Content>
      </Container>
    </>
  );
}
