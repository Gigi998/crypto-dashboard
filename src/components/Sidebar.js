import React from "react";
import styled from "styled-components";
import sidebarLinks from "../helpers/constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // <Wrapper>
    //   <div className="logo-container">
    //     <span className="dot dot-rect"></span>
    //     <div className="dot-container">
    //       <span className="dot"></span>
    //       <span className="dot"></span>
    //     </div>
    //   </div>
    //   <div className="links-container">
    //     {sidebarLinks.map((link) => {
    //       return (
    //         <div className="link-content" key={link.id}>
    //           <span className="link-bar"></span>
    //           <Link to={link.path} className="link">
    //             {link.icon}
    //           </Link>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </Wrapper>
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
            <Link to={link.path} className="link" key={link.id}>
              {link.icon}
            </Link>
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
  justify-content: flex-start;
  flex: 0 0 5rem;
  height: 70rem;
  padding: 1rem;
  .logo-container {
    width: 3.6rem;
    height: 3.6rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .dot {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 100px;
    display: inline-block;
    background: linear-gradient(167.76deg, #24e6f3 -1%, #5860e3 87.91%);
  }
  .dot-rect {
    height: 3.6rem;
    border-radius: 100px;
    width: 1.6rem;
  }
  .dot-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .links-container {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: #bdc0c9;
  }
  .link::before {
    content: "";
    width: 3px;
    height: 100%;
    background: linear-gradient(167.76deg, #24e6f3 -1%, #5860e3 87.91%);
    position: absolute;
    top: 0;
    left: -1.4rem;
    transform: scaleY(0);
    transition: transform 0.4s;
  }
  .link:hover::before {
    transform: scaleY(1);
  }
`;

export default Sidebar;
