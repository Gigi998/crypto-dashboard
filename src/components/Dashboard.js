import React from "react";
import { Navbar, MainDashboard, SideDashboard } from "./";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="content">
        <Navbar />
        <div className="dashboard">
          <MainDashboard />
          <SideDashboard />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #181a25;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100%;
  .content {
    max-height: inherit;
    height: 85vh;
    margin: 1rem 1rem 0 1rem;
    display: grid;
    grid-template-rows: 1fr 9fr;
  }
`;

export default Dashboard;
