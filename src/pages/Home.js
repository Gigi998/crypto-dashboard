import React from "react";
import { Sidebar, Dashboard } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Dashboard />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #292a34;
  max-width: 140rem;
  border-radius: 25px;
  border: 20px solid #292a34;
  min-height: 50rem;
  margin: 5rem auto;
  display: flex;
`;

export default Home;
