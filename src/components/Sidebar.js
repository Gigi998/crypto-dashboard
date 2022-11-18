import React from "react";
import styled from "styled-components";
import sidebarLinks from "../helpers/constants";
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
        {sidebarLinks.map((link) => {
          return (
            <div className="link-content" key={link.id}>
              <span className="link-bar"></span>
              <Link to={link.path} className="link">
                {link.icon}
              </Link>
            </div>
          );
        })}
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
    position: absolute;
    top: 0;
    left: 0;
  }
  .links-container {
    width: 100%;
    margin-top: 100px;
    gap: 1rem;
  }
  .link-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 36px;
  }
  .link {
    color: #303241;
  }
  .link-active {
    color: white;
  }
`;

export default Sidebar;
