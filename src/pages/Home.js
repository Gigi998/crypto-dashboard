import React from "react";
import { Sidebar, Dashboard } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <Sidebar />
        <Dashboard />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #292a34;
  margin: 2.5vh 5vw;
  width: 90vw;
  height: 95vh;
  border-radius: 25px;
  border: 20px solid #292a34;
  .main-container {
    display: grid;
    grid-template-columns: 70px auto;
    height: 90vh;
    max-height: 100%;
    min-width: 320px;
  }
`;

export default Home;
