import React from "react";
import styled from "styled-components";
import { BsHeart, BsBell, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  handleChange,
  getCryptoName,
  clearSearch,
} from "../features/allCrypto/allCryptoSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, search } = useSelector((store) => store.allCrypto);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCryptoName(search));
    navigate("/singleCrypto");
    dispatch(clearSearch());
  };

  const handleSearch = (e) => {
    dispatch(handleChange({ value: e.target.value }));
  };

  return (
    <Wrapper>
      <form className="search-field basic-container" onSubmit={handleSubmit}>
        <Link to="singleCrypto" className="single-icon search">
          <BsSearch />
        </Link>
        <input
          type="text"
          placeholder="Search market"
          className="input"
          onChange={handleSearch}
          value={search}
        />
      </form>
      <div className="icon-container basic-container">
        <BsHeart className="single-icon" />
      </div>
      <div className="icon-container basic-container">
        <span className="dot"></span>
        <BsBell className="single-icon" />
      </div>
      <div className="icon-container basic-container">
        <p>Welcome user</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin: 0 2rem;
  height: 10rem;
  display: flex;
  align-items: center;
  .search-field {
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 30%;
    padding: 0.6rem;
    height: 5rem;
  }
  .input {
    color: #a6a9b3;
    border: none;
    border-color: transparent;
    background-color: transparent;
    width: 100%;
    margin-left: 0.5rem;
  }
  .input:focus {
    outline: none;
  }
  .single-icon {
    color: #a6a9b3;
    background-color: transparent;
    border: none;
    font-size: 1.7rem;
    margin-top: 0.5rem;
  }
  .search {
    margin-left: 1rem;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    min-width: 5rem;
    position: relative;
  }
  .icon-container:not(:last-child) {
    margin-right: 1.5rem;
  }
  .dot {
    background: #ff646d;
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    top: 1.4rem;
    left: 2.5rem;
    border-radius: 50%;
  }
  p {
    color: #666873;
    padding: 0.5rem;
  }
`;
export default Navbar;
