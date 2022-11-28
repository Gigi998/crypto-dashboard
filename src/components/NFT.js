import React from "react";
import styled from "styled-components";

const NFT = ({ title, url, price, owner, ownerImg }) => {
  return (
    <Wrapper className="basic-container">
      <div className="nft-top">
        <img src={url} alt={title} className="nftImg" />
        <h4 className="owner">{owner}</h4>
        <img src={ownerImg} alt="img" className="ownerImg" />
      </div>
      <div className="nft-bottom">
        <h3 className="nft-title">{title}</h3>
        <div className="bottom-container">
          <div className="price">
            Current Bid
            <br />
            {price}
          </div>
          <button className="btn btn-bidded">Bidded</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  .nft-top {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .nftImg {
    width: 95%;
    height: 10rem;
    border-radius: 12px;
    margin-bottom: 0.5em;
  }
  .ownerImg {
    width: 2em;
    height: 2em;
    border-radius: 100%;
    position: absolute;
    top: 9em;
    left: 8em;
  }
  .owner {
    margin-left: -8.5em;
    color: #43465c;
    font-size: small;
    font-weight: 100;
  }
  .nft-bottom {
    display: flex;
    flex-direction: column;
    margin: 0.5em;
  }
  .nft-title {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.5em;
  }
  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    font-weight: 200;
    font-size: 0.8rem;
  }
  .btn-bidded {
    height: 2em;
    width: 5em;
  }
`;

export default NFT;
