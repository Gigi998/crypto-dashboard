import { TbRefresh, TbArrowNarrowRight } from "react-icons/tb";
import React, { useState } from "react";
import styled from "styled-components";
import { ExchangeSelect } from "./";
import { CryptoCurrenciesList } from "../helpers/constants";

const Exchange = () => {
  return (
    <Wrapper className="basic-container">
      <div className="exchange-top">
        <h1>Exchange</h1>
        <button className="refresh-btn">
          <TbRefresh />
        </button>
      </div>
      <div className="exchange">
        <p>
          1 <span className="currency">BTC</span>
        </p>
        <TbArrowNarrowRight size={"2rem"} />
        <p>
          20000 <span className="currency">USD</span>
        </p>
      </div>
      <ExchangeSelect getpay="get" crypto={CryptoCurrenciesList} />
      <ExchangeSelect getpay="pay" crypto={CryptoCurrenciesList} />
      <button className="btn btn-exchange">Exchange</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  flex: 0 0 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .exchange-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .refresh-btn {
      background-color: transparent;
      border: none;
      color: #a6a9b3;
      font-size: 1.8rem;
      display: flex;
      cursor: pointer;
    }
    h1 {
      font-weight: 500;
      font-size: 1.4rem;
    }
  }
  .exchange {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 1.4rem;
    }
    .currency {
      color: #43465c;
      font-weight: 600;
    }
  }
  .btn-exchange {
    display: inline-block;
    height: 3rem;
    width: 100%;
  }
`;

export default Exchange;
