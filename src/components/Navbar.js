import React from "react";
import styled from "styled-components";
import { BsHeart, BsBell, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form className="search-field basic-container" onSubmit={handleSubmit}>
        <button className="single-icon search">
          <BsSearch />
        </button>
        <input type="text" placeholder="Search market" className="input" />
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
    top: 1.3rem;
    left: 2.5rem;
    border-radius: 50%;
  }
  p {
    color: #666873;
    padding: 0.5rem;
  }
`;
export default Navbar;
