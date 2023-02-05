import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrency,
  addToFavorites,
} from "../features/allCrypto/allCryptoSlice";
const SingleCurrency = ({
  name,
  symbol,
  supply,
  marketCapUsd,
  priceUsd: price,
  changePercent24Hr: change,
}) => {
  const dispatch = useDispatch();
  const { singleCurrency, favoritesList } = useSelector(
    (store) => store.allCrypto
  );

  const handleClick = () => {
    if (favoritesList.length === 0) {
      dispatch(addToFavorites({ singleCurrency }));
    } else {
      let isInArr;
      isInArr = favoritesList.find((item) => item.id === singleCurrency.id);
      if (!isInArr) {
        dispatch(addToFavorites({ singleCurrency }));
      } else {
        return;
      }
    }
  };

  return (
    <Wrapper>
      <div className="basic-container crypto-container">
        <h2>Name: {name}</h2>
        <h2>Symbol: {symbol}</h2>
        <h2>Supply:{parseInt(supply, 10)} </h2>
        <h2>Price: ${parseInt(price, 10)}</h2>
        <h2>Change24Hr: {change}%</h2>
        <button className="btn btn-add" onClick={() => handleClick()}>
          Add to favorites
        </button>
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
  .btn-back {
    width: 10rem;
    margin: auto;
    margin-top: 2rem;
    height: 2rem;
  }
  .btn-add {
    width: 12rem;
    height: 2rem;
  }
`;

export default SingleCurrency;
