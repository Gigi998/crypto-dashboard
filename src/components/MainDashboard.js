import React, { useEffect } from "react";
import { Crypto, NFT, Transaction, Loading } from "./";
import styled from "styled-components";
import { TransactionsList } from "../helpers/constants";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoCurrencies } from "../features/allCrypto/allCryptoSlice";
import { getNFT } from "../features/allNFTs/allNFTslice";
import { NFTList } from "../helpers/constants";
import { Link } from "react-router-dom";

const MainDashboard = () => {
  const dispatch = useDispatch();
  const { currenciesList, isLoading } = useSelector((store) => store.allCrypto);
  const { nftList } = useSelector((store) => store.allNFT);
  // Fetching currencies
  useEffect(() => {
    dispatch(getCryptoCurrencies());
  }, []);
  // // Fetching nfts
  // useEffect(() => {
  //   dispatch(getNFT());
  // }, []);

  return (
    <Wrapper>
      <div className="crypto-container">
        {isLoading ? (
          <Loading />
        ) : (
          currenciesList.slice(0, 4).map((item) => {
            return <Crypto key={item.rank} {...item} />;
          })
        )}
      </div>
      <div className="heading-content">
        <h2 className="heading-title">Top NFT this month</h2>
        <button className="heading-btn">
          See all
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="NFT-container">
        {NFTList.map((item) => {
          return <NFT key={item.id} {...item} />;
        })}
      </div>
      <div className="heading-content">
        <h2 className="heading-title">Biggest transactions of the month</h2>
        {/* <Link className="heading-btn" to={<AllCurrencies />}>
          See all
          <MdArrowForwardIos />
        </Link> */}
      </div>
      <div className="transaction-section">
        <div className="transaction-header">
          <p></p>
          <p>From</p>
          <p>To</p>
          <p>Currency</p>
          <p className="transaction-price">Price</p>
          <p className="transaction-amount">Amount</p>
          <p className="transaction-buy">Buy/Sell</p>
          <p>Date</p>
        </div>
        {TransactionsList.map((trans) => {
          return <Transaction key={trans.id} {...trans} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  .crypto-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 12%;
  }
  .heading-content {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 1rem 0;
  }
  .heading-title {
    margin-right: auto;
  }
  .NFT-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 25%;
  }
  .heading-btn {
    border: none;
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .transaction-section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .transaction-header {
    display: flex;
    justify-content: space-between;
    color: #fff;
    * {
      width: 7.5rem;
      margin-left: 1rem;
      font-size: 1.1rem;
      color: #666873;
      :nth-child(1) {
        width: 1rem;
      }
    }
    .transaction-price {
      display: flex;
      justify-content: flex-end;
    }
    .transaction-amount {
      display: flex;
      justify-content: flex-end;
    }
    .transaction-buy {
      display: flex;
      justify-content: center;
    }
  }
`;
export default MainDashboard;
