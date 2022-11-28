import React from "react";
import styled from "styled-components";
const Transaction = ({ id, from, to, currency, price, date, buy, amount }) => {
  return (
    <Wrapper className="basic-container">
      <p>{id}</p>
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
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
`;

export default Transaction;
