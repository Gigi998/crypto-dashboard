import { TbRefresh } from "react-icons/tb";
import React from "react";
import styled from "styled-components";

const Exchange = () => {
  return (
    <Wrapper className="basic-container">
      <div>
        <h1>Exchange</h1>
        <button className="refresh-btn"></button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 42%;
`;

export default Exchange;
