import React from "react";
import { Crypto, NFT } from "./";
import styled from "styled-components";
import { CryptoCurrenciesList } from "../helpers/constants";

const MainDashboard = () => {
  return (
    <Wrapper>
      <div className="crypto-container">
        {CryptoCurrenciesList.map((item) => {
          return <Crypto key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .crypto-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 40em;
  }
`;
export default MainDashboard;
