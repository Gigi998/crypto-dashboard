import React from "react";
import styled from "styled-components";
import { Exchange, TransRatio, InOut } from "./";

const SideDashboard = () => {
  return (
    <Wrapper>
      <Exchange />
      <TransRatio />
      <InOut />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  margin-right: 2rem;
  & > * {
    padding: 1rem;
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export default SideDashboard;
