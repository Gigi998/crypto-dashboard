import React from "react";
import styled from "styled-components";
import { BsGraphUp } from "react-icons/bs";

const InOut = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <Wrapper className="basic-container">
      <h2 className="title">Income and Outcome</h2>
      <p className="subtitle">Based on your performance</p>
      <BsGraphUp fontSize="10rem" color="#fff" />
      <div className="check-squares">
        <div className="check">
          <input type="checkbox" id="income" onChange={handleChange} checked />
          <label htmlFor="income">Income</label>
        </div>
        <div className="check">
          <input type="checkbox" id="outcome" onChange={handleChange} checked />
          <label htmlFor="outcome">Outcome</label>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 42%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .check-squares {
    display: flex;
    .check-out {
      margin-left: 2rem;
    }
  }
  .title {
    font-weight: 500;
  }
  .subtitle {
    color: #43465c;
    font-size: 1.1rem;
  }
`;
export default InOut;
