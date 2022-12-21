import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper className="basic-page">
      <h1>Sorry, page not found</h1>
      <Link to="/" className="link">
        back to home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  color: #fff;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .link {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

export default Error;
