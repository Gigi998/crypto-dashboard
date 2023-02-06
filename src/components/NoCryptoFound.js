import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NoCryptoFound = () => {
  return (
    <Wrapper>
      <h2 className="header-list">Sorry, we can not find crypto you want</h2>

      <Link to="/" className="home-btn">
        Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default NoCryptoFound;
