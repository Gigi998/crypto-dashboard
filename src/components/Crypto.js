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
