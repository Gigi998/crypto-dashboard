import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AllTransactions = () => {
  return (
    <Wrapper className="basic-page">
      <h1>All trans</h1>
      <Link to="/">back to home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default AllTransactions;
