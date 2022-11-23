import React from "react";
import styled from "styled-components";

const Crypto = ({ title, price, url }) => {
  return (
    <Wrapper className="basic-container">
      <div className="crypto-header">
        <img src={url} alt={title} />
        <h4>{title} (24h)</h4>
      </div>
      <p>${price}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.7em;
  padding: 1em;
  width: 25%;
  .crypto-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export default Crypto;
