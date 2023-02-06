import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoritesList } = useSelector((store) => store.allCrypto);
  return (
    <Wrapper className="basic-page">
      <h1 className="header-list">Favorites</h1>
      <Link to="/" className="home-btn">
        back home
      </Link>{" "}
      <div>
        {favoritesList.map((item) => {
          const { name, symbol, supply, price, change, id } = item;
          return (
            <div className="basic-container crypto-container" key={item.id}>
              <h2>Name: {name}</h2>
              <h2>Symbol: {symbol}</h2>
              <h2>Supply:{parseInt(supply, 10)} </h2>
              <h2>Price: ${parseInt(price, 10)}</h2>
              <h2>Change24Hr: {change}%</h2>
              <button className="btn">Remove</button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Favorites;
