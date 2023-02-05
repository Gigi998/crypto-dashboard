import React, { useEffect, useRef, useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useFetchNFT from "../hooks/fetchNFTs";
import { Loading } from "../components";

const AllNFT = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore, nftList } = useFetchNFT(pageNumber);

  // Making observer
  const observer = useRef();

  // Checking if is interesecting
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Wrapper className="basic-page">
      <h1 className="header-list">NFTs list</h1>
      <Link to="/" className="list-home-btn">
        back home
      </Link>
      {loading && nftList.length === 0 ? (
        <Loading />
      ) : (
        <div className="basic-container nfts-container">
          {nftList.map((n, index) => {
            const { chain, contract_address: address, updated_date: date } = n;
            if (nftList.length === index + 1) {
              return (
                <div
                  ref={lastElement}
                  key={Math.random() * 10000}
                  className="basic-container nft"
                >
                  <h3>Chain: {chain}</h3>
                  <p>Address: {address}</p>
                  <p>Date: {date}</p>
                </div>
              );
            } else {
              return (
                <div
                  key={Math.random() * 10000}
                  className="basic-container nft"
                >
                  <h3>Chain: {chain}</h3>
                  <p>Address: {address}</p>
                  <p>Date: {date}</p>
                </div>
              );
            }
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .nfts-container {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  .nft {
    padding: 1rem;
    color: #fff;
  }
`;

export default AllNFT;
