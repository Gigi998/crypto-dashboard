import React from "react";
import styled from "styled-components";
import { CgSpinner } from "react-icons/cg";

const TransRatio = () => {
  return (
    <Wrapper className="basic-container">
      <CgSpinner fontSize={"5rem"} color={"#fff"} />
      <div className="content">
        <h2>80% of transactions</h2>
        <p>Absolutely on this platform</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .content {
    margin-left: 2rem;
    h2 {
      color: #fff;
      font-weight: 500;
      font-size: 1.8rem;
    }
    p {
      color: #43465c;
      font-size: 1.1rem;
    }
  }
`;

export default TransRatio;
