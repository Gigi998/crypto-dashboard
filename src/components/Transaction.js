import React from "react";
import styled from "styled-components";
const Transaction = ({
  id,
  from,
  to,
  currency,
  price,
  date,
  buy,
  amount,
  img,
  amountFiat,
}) => {
  return (
    <Wrapper className="basic-container">
      <p>{id}</p>
      <p className="tran-key">{from}</p>
      <p className="tran-key">{to}</p>
      <div className="currency-container">
        <img src={img} alt={currency} className="currency-img" />
        <p>{currency}</p>
      </div>
      <p className="price">${price}</p>
      <div className="amount">
        <p>{amount}</p>
        <p>${amountFiat}</p>
      </div>
      <button className="buy">{buy}</button>
      <p>{date}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  > * {
    font-size: 1.2rem;
    width: 7.5rem;
    color: #fff;
    margin-left: 1rem;
    :nth-child(1) {
      width: 1rem;
      color: #303241;
    }
  }
  .tran-key {
    color: #71a8fe;
  }
  .currency-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .currency-img {
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    margin-left: 0;
  }
  .price {
    display: flex;
    justify-content: flex-end;
  }
  .amount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .buy,
  .sell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    height: 2rem;
    cursor: pointer;
  }
  .buy {
    background: rgba(255, 91, 109, 0.3);
    color: #ff5b6d;
  }
  .sell {
    color: #22d49f;
    background: rgba(34, 212, 159, 0.3);
  }
`;

export default Transaction;
