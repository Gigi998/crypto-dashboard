import React from "react";
import { Sidebar, Dashboard } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="basic-page">
      <Sidebar />
      <Dashboard />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Home;
