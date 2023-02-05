import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Loading, Crypto } from "../components";
import { getCryptoCurrencies } from "../features/allCrypto/allCryptoSlice";

const AllCrypto = () => {
  const dispatch = useDispatch();
  const { currenciesList, isLoading } = useSelector((store) => store.allCrypto);

  // Fetching currencies
  useEffect(() => {
    dispatch(getCryptoCurrencies());
  }, []);

  return (
    <Wrapper>
      <h3 className="header-list">Crypto list</h3>
      <Link to="/" className="list-home-btn">
        Back Home
      </Link>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="crypto-container">
          {currenciesList.map((item) => {
            return <Crypto key={item.rank} {...item} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #292a34;
  max-width: 140rem;
  border-radius: 25px;
  border: 20px solid #292a34;
  min-height: 50rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .crypto-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    .crypto-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 576px) {
    .crypto-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default AllCrypto;
