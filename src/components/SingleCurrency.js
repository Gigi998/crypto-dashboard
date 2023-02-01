import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrency } from "../features/singleCrypto/singleCryptoSlice";
const SingleCurrency = ({
  name,
  symbol,
  supply,
  marketCapUsd,
  priceUsd: price,
  changePercent24Hr: change,
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="basic-container crypto-container">
        <h2>Name: {name}</h2>
        <h2>Symbol: {symbol}</h2>
        <h2>Supply:{parseInt(supply, 10)} </h2>
        <h2>Price: ${parseInt(price, 10)}</h2>
        <h2>Change24Hr: {change}%</h2>
      </div>
      <button
        className="btn btn-back"
        onClick={() => dispatch(clearCurrency())}
      >
        Clear
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .crypto-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #a6a9b3;
  }
  .btn-back {
    width: 10rem;
    margin: auto;
    margin-top: 2rem;
    height: 2rem;
  }
`;

export default SingleCurrency;
