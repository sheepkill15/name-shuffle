import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import styled, { createGlobalStyle } from 'styled-components/macro';
import 'react-toastify/dist/ReactToastify.css';
import { NameSuffle } from './NameShuffle';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Host>
        <Title>Name Suffle</Title>
        <Inner>
          <NameSuffle />
        </Inner>
      </Host>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
`;

const Host = styled.div`
  max-width: 450px;
  margin: 5px auto;

  box-shadow: 0px 0px 3px 3px #ccc;
  padding: 5px;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin: 5px;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Inner = styled.div``;
