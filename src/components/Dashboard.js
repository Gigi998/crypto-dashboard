import React from "react";
import { Navbar, MainDashboard, SideDashboard } from "./";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="dashboard">
        <MainDashboard />
        <SideDashboard />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #181a25;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  .dashboard {
    display: flex;
  }
`;

export default Dashboard;
