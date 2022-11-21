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
        <button className="single-icon">
          <BsSearch />
        </button>
        <input type="text" placeholder="Search market" className="input" />
      </form>
      <div className="icons">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  .icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .search-field {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 25vw;
    padding: 6px;
    max-width: 300px;
    height: 50px;
  }
  .input {
    color: #a6a9b3;
    border: none;
    border-color: transparent;
    background-color: transparent;
    width: 100%;
  }
  .input:focus {
    border-color: 3px solid blue;
    border: none;
  }
  .single-icon {
    color: #a6a9b3;
    background-color: transparent;
    border: none;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    min-width: 50px;
    position: relative;
  }
  .dot {
    background: #ff646d;
    position: absolute;
    width: 6px;
    height: 6px;
    top: 13px;
    left: 25px;
    border-radius: 50%;
  }
  p {
    color: #666873;
    padding: 0.5rem;
  }
`;
export default Navbar;
