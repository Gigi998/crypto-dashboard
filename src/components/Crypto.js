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
  padding: 12px;
  .crypto-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
export default Crypto;
