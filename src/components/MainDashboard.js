import React from "react";
import { Crypto, NFT } from "./";
import styled from "styled-components";
import { CryptoCurrenciesList } from "../helpers/constants";
import { NFTList } from "../helpers/constants";
import { MdArrowForwardIos } from "react-icons/md";

const MainDashboard = () => {
  return (
    <Wrapper>
      <div className="crypto-container">
        {CryptoCurrenciesList.map((item) => {
          return <Crypto key={item.id} {...item} />;
        })}
      </div>
      <div className="heading-content">
        <h2>Top NFT this month</h2>
        <div className="heading-icon">
          <p>See all</p>
          <MdArrowForwardIos />
        </div>
      </div>
      <div className="NFT-container">
        {NFTList.map((item) => {
          return <NFT key={item.id} {...item} />;
        })}
      </div>
      <div className="heading-content">
        <h2>Biggest transaction of the month</h2>
        <div className="heading-icon">
          <p>See all</p>
          <MdArrowForwardIos />
        </div>
      </div>
      <div className="transaction-container"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  .crypto-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .NFT-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .heading-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .heading-icon {
    display: flex;
  }
`;
export default MainDashboard;
