import React from "react";
import { Navbar, MainDashboard, SideDashboard } from "./";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainDashboard />
      <SideDashboard />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Dashboard;
