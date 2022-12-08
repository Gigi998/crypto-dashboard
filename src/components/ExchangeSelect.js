import React from "react";
import styled from "styled-components";

const ExchangeSelect = ({ getpay, crypto }) => {
  return (
    <Wrapper>
      <h3 className="get-heading">{getpay}</h3>
      <form className="exchange-search basic-container">
        <input type="text" className="exchange-in" />
        <select className="exchange-select">
          {crypto.map((item) => {
            return <option key={item.id}>{item.title}</option>;
          })}
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .get-heading {
    color: #43465c;
    text-transform: capitalize;
  }
  .exchange-search {
    display: flex;
    background-color: transparent;
    padding: 1rem;
    .exchange-select {
      background-color: transparent;
      border: none;
      color: #fff;
    }
    .exchange-in {
      color: #fff;
      border: none;
      border-color: transparent;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }
  }
`;
export default ExchangeSelect;
