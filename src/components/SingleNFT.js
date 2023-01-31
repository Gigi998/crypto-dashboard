import React from "react";
import styled from "styled-components";
import boredApe from "../assets/images/boredApe.jpg";

const SingleNFT = ({ metadata: { img }, token_name: name }) => {
  return (
    <Wrapper>
      {/* <h3>{name === null ? "Name" : name}</h3>
      { */}
      <img
        src={img === (null || undefined) ? boredApe : img}
        alt={name}
        className="nft-img"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  border: 2px solid black;
  border-radius: 12px;
  .nft-img {
    width: 10rem;
  }
`;

export default SingleNFT;
