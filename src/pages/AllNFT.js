import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getNFT } from "../features/allNFTs/allNFTSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/allNFTs/allNFTSlice";

const AllNFT = () => {
  const dispatch = useDispatch();
  const { nftList, pageNumber, loading, hasMore, error } = useSelector(
    (store) => store.allNFT
  );

  useEffect(() => {
    dispatch(getNFT(pageNumber));
  }, [pageNumber]);

  const nextPage = () => {
    dispatch(setPage(1));
  };

  // Making obsserver
  const observer = useRef();

  // Checking if is interesecting
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          nextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Wrapper className="basic-page">
      <h1>All nft</h1>
      <Link to="/">back to home</Link>
      <div>
        {nftList.map((n, index) => {
          if (nftList.length === index + 1) {
            return (
              <div ref={lastElement} key={Math.random() * 10000}>
                {n.chain}
              </div>
            );
          } else {
            return <div key={Math.random() * 10000}>{n.chain}</div>;
          }
        })}
      </div>
      <div>{loading && "Loading"}</div>
      <div>{error && "Error"}</div>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default AllNFT;
