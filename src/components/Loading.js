import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 12%;
`;

export default Loading;
