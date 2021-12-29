import { FC } from "react";
import styled from "styled-components/macro";

export const App: FC = () => {
  return (
    <Host>
      <Title>Name Suffle</Title>
      <Inner>This is the content.</Inner>
    </Host>
  );
};

const Host = styled.div``;

const Title = styled.h1``;

const Inner = styled.div``;
