import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AllNFT = () => {
  return (
    <Wrapper className="basic-page">
      <h1>All nft</h1>
      <Link to="/">back to home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default AllNFT;
