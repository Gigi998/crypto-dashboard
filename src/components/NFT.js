import React from "react";
import styled from "styled-components";

const NFT = ({ title, url, price }) => {
  return (
    <Wrapper className="basic-container">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <div className="bottom-container">
        <p>
          Current Bid
          {price}
        </p>
        <button className="btn">Bidded</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.7em;
  width: 25%;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default NFT;
