import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SingleNFT } from "../components";

const AllNFT = () => {
  const { nftList } = useSelector((store) => store.allNFT);

  return (
    <Wrapper>
      <Link to="/">back to home</Link>
      {/* <div className="allNFT-container">
        {nftList.map((item) => {
          return <SingleNFT key={item.id} {...item} />;
        })}
      </div> */}
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
  .allNFT-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export default AllNFT;
