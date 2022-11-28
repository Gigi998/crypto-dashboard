import React from "react";
import styled from "styled-components";
const SideDashboard = () => {
  return <Wrapper>SideDashboard</Wrapper>;
};

const Wrapper = styled.section`
  display: none;
  @media (min-width: 1150px) {
    display: block;
  }
`;
export default SideDashboard;
