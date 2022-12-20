import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Loading } from "./";

const Crypto = ({ rank, symbol, name, id, priceUsd }) => {
  const { isLoading } = useSelector((store) => store.allCrypto);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Wrapper className="basic-container">
      <div className="crypto-header">
        <h4>{name}</h4>
        <p>(24h)</p>
      </div>
      <p>${parseInt(priceUsd, 10)}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 24%;
  padding: 1rem;
  .crypto-header {
    display: flex;
    align-items: center;
    color: #fff;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100px;
  }
  p {
    color: #fff;
  }
`;
export default Crypto;
