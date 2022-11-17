import React from "react";
import styled from "styled-components";
import { BsHeart, BsBell, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form className="search-field" onSubmit={handleSubmit}>
        <button className="search-icon">
          <BsSearch />
        </button>
        <input type="text" placeholder="Search market" className="input" />
      </form>
      <div className="icons">
        <div className="icon-container">
          <BsHeart />
        </div>
        <div className="icon-container">
          <BsBell />
        </div>
        <div className="icon-container">
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
  .icons {
    display: flex;
    align-items: center;
  }
  .search-field {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(180deg, #171822 0%, #171822 100%);
    border: 1px solid #303241;
    border-radius: 12px;
    width: 25vw;
    padding: 6px;
    max-width: 300px;
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
  .search-icon {
    color: #a6a9b3;
    background-color: transparent;
    border: none;
  }
`;
export default Navbar;
