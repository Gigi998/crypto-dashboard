import React from "react";
import { Crypto, NFT } from "./";
import styled from "styled-components";
import { CryptoCurrenciesList } from "../helpers/constants";
import { NFTList } from "../helpers/constants";

const MainDashboard = () => {
  return (
    <Wrapper>
      <div className="crypto-container">
        {CryptoCurrenciesList.map((item) => {
          return <Crypto key={item.id} {...item} />;
        })}
      </div>
      <h2>Top NFT this month</h2>
      <div className="NFT-container">
        {NFTList.map((item) => {
          return <NFT key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  .crypto-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .NFT-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
export default MainDashboard;
