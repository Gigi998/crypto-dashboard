import React from "react";
import styled from "styled-components";

const NFT = ({ title, url, price, owner, ownerImg }) => {
  return (
    <Wrapper className="basic-container">
      <img src={url} alt={title} className="nftImg" />
      <h4 className="owner">{owner}</h4>
      {/* <img src={ownerImg} alt="img" className="ownerImg" /> */}

      <h3 className="nft-title">{title}</h3>
      <div className="bottom-container">
        <div className="price">
          Current Bid
          <br />
          {price}
        </div>
        <button className="btn btn-bidded">Bidded</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 24%;
  padding: 1rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  .nftImg {
    width: 100%;
    height: 50%;
    border-radius: 12px;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
  .bottom-container {
    display: flex;
  }
  .price {
    margin-right: auto;
  }
  .btn-bidded {
    width: 6rem;
  }
`;

export default NFT;
