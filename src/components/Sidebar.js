import React from "react";
import styled from "styled-components";
import { RiHome5Fill } from "react-icons/ri";
import { HiGlobeAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <span className="dot dot-rect"></span>
        <div className="dot-container">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="links-container">
        <div className="link">
          <span className="link-bar"></span>
          <Link to="/">
            <RiHome5Fill />
          </Link>
        </div>
        {/* testing  */}
        <div className="link">
          <span className="link-bar"></span>
          <Link to="/">
            <HiGlobeAlt />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background-color: #12131c;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  .logo-container {
    width: 100%;
    height: 36px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 100px;
    display: inline-block;
    background: linear-gradient(167.76deg, #24e6f3 -1%, #5860e3 87.91%);
  }
  .dot-rect {
    height: 36px;
    border-radius: 100px;
    margin-right: 0.1rem;
  }
  .dot-container {
    height: 36px;
    width: 16px;
    margin-left: 0.1rem;
  }
  .link-bar {
    height: 36px;
    border-radius: 21px;
    width: 4px;
    display: inline-block;
    background: linear-gradient(167.76deg, #24e6f3 -1%, #5860e3 87.91%);
  }
  .links-container {
    width: 100%;
    margin-top: 100px;
    gap: 1rem;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 36px;
  }
  .link-bar {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default Sidebar;
