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
  width: 95vw;
  height: 95vh;
  border-radius: 25px;
  border: 20px solid #292a34;
  display: grid;
  grid-template-columns: 70px auto;
  min-width: 300px;
`;

export default Home;
