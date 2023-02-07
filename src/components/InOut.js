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
        <div>
          <input type="checkbox" id="income" onChange={handleChange} />
          <label htmlFor="income" className="check">
            Income
          </label>
        </div>
        <div>
          <input type="checkbox" id="outcome" onChange={handleChange} />
          <label htmlFor="outcome" className="check">
            Outcome
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .check-squares {
    display: flex;
    gap: 1rem;
    .check-out {
      margin-left: 2rem;
    }
    .check {
      margin-left: 0.3rem;
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
