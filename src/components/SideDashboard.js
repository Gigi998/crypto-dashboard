import React from "react";
import styled from "styled-components";
const SideDashboard = () => {
  return <Wrapper>SideDashboard</Wrapper>;
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;
export default SideDashboard;
