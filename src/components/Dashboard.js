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
  height: 100%;
  padding: 15px;
  display: grid;
  grid-template-rows: 50px auto;
  min-width: 300px;
  .dashboard {
    width: 100%;
    display: grid;
    grid-template-columns: 66% 34%;
    margin-top: 0.8rem;
  }
  @media (max-width: 1150px) {
    .dashboard {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default Dashboard;
