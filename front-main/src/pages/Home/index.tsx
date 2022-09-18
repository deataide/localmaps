import React from 'react';

import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from './styles';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Mapa Local de sua cidade</Title>
        <SubTitle>Encontre no comércio local tudo que precisa</SubTitle>

        <Link to='/new'>
          <Button>
            <ButtonBox>{'>'}</ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default Home;
