import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const API = `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=3&page_size=10&include=metadata&refresh_metadata=false`;
const API_KEY = "c0ee50b3-7ec8-4e13-b444-8ec3885dda62";

const useFetchNFT = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nftList, setNftList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      url: `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=${pageNumber}&page_size=10&include=metadata&refresh_metadata=false`,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNftList((prev) => {
          return [...prev, ...res.data.nfts];
        });
        setHasMore(res.data.nfts.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);
  return { loading, error, nftList, hasMore };
};

export default useFetchNFT;
