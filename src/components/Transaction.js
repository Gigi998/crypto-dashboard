import React from "react";
import styled from "styled-components";
const Transaction = ({ id, from, to, currency, price, date, buy, amount }) => {
  return (
    <Wrapper className="basic-container">
      {/* <p>{id}</p> */}
      <p>{from}</p>
      <p>{to}</p>
      <p>{currency}</p>
      <p>{price}</p>
      <p>{amount}</p>
      <p>{buy}</p>
      <p>{date}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    width: 3rem;
    color: #fff;
  }
`;

export default Transaction;
