import React from "react";
import styled from "styled-components";

const Crypto = ({ title, price, url, gain }) => {
  return (
    <Wrapper className="basic-container">
      <div className="crypto-header">
        <img src={url} alt={title} />
        <h4>{title}</h4>
        <p>(24h)</p>
      </div>
      <p>${price}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
  padding: 1em;
  width: 25%;
  .crypto-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4em;
  }
  img {
    width: 1.5em;
    height: 1.5em;
    border-radius: 100px;
  }
`;
export default Crypto;
