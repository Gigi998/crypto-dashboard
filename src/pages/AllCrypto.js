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
      <h3 className="header">Crypto list</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="crypto-container">
          {currenciesList.map((item) => {
            return <Crypto key={item.rank} {...item} />;
          })}
        </div>
      )}
      <Link to="/" className="back-btn">
        back to home
      </Link>
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
  .header {
    font-size: 2rem;
  }
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
  .back-btn {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    text-transform: capitalize;
    margin-top: 1rem;
  }
`;

export default AllCrypto;
