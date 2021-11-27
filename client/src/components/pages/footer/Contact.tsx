import * as React from "react";
import styled from "styled-components";

const TagComponent = styled.div`
  width: 100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-bottom: 160px;
  background-color: gray;
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

class Contact extends React.Component {
  render() {
    return (
      <TagComponent>
        <Header>Contacts</Header>
        <StyledText>
          <p>Do you have any questions?</p>
        </StyledText>

        <p>info@82learn.com</p>

        <StyledText></StyledText>
      </TagComponent>
    );
  }
}

export default Contact;
