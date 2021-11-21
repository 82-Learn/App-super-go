import * as React from "react";
import styled from "styled-components";

const TagComponent = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
  padding: 16px 16px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
`;

const StyledText = styled.div`
  color: white;
  text-align: center;
  font-size: 20px;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

class Purpose extends React.Component {
  render() {
    return (
      <TagComponent>
        <Header>
          <h1>Our Purpose</h1>
        </Header>
        <StyledText>
          <p>Our object is to improve human learning speed.</p>
        </StyledText>
      </TagComponent>
    );
  }
}

export default Purpose;
