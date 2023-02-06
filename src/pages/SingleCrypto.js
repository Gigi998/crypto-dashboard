import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrency,
  addToFavorites,
} from "../features/allCrypto/allCryptoSlice";
import { Link } from "react-router-dom";
import { Loading, NoCryptoFound } from "../components";

const SingleCrypto = () => {
  const dispatch = useDispatch();
  const { singleCurrency, favoritesList, isLoadingSingle } = useSelector(
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

  if (isLoadingSingle) {
    return (
      <div className="basic-page">
        <Loading />;
      </div>
    );
  }

  if (!singleCurrency) {
    return (
      <div className="basic-page">
        <NoCryptoFound />;
      </div>
    );
  }

  const {
    name,
    symbol,
    supply,
    priceUsd: price,
    changePercent24Hr: change,
  } = singleCurrency;

  return (
    <Wrapper className="basic-page">
      <h1 className="header-list">Single Crypto</h1>
      <div className="basic-container crypto-container">
        <h2>Name: {name}</h2>
        <h2>Symbol: {symbol}</h2>
        <h2>Supply:{parseInt(supply, 10)} </h2>
        <h2>Price: ${parseInt(price, 10)}</h2>
        <h2>Change24Hr: {parseInt(change, 10)}%</h2>
        <button className="btn btn-add" onClick={() => handleClick()}>
          Add to favorites
        </button>
      </div>
      <Link
        to="/"
        className="home-btn"
        onClick={() => dispatch(clearCurrency())}
      >
        Back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .btn-add {
    width: 12rem;
    height: 2rem;
  }
`;

export default SingleCrypto;
