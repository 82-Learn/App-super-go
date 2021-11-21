import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #010d11;
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -142px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  padding: 30px 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

const Heading = styled.p`
  font-size: 15px;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  color: #ff6600;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const FooterLink = styled.div`
  color: white;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  padding: 8px 8px;

  &:hover {
    background-color: #ff6600;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Column>
          <Heading>ABOUT 82</Heading>
          <FooterLink onClick={(event) => (window.location.href = "/purpose")}>
            PURPOSE
          </FooterLink>
        </Column>
        <Column>
          <Heading>CONTACT 82</Heading>
          <FooterLink onClick={(event) => (window.location.href = "/contact")}>
            CONTACT
          </FooterLink>
        </Column>
        <Column>
          <Heading>JOIN</Heading>
          <FooterLink onClick={(event) => (window.location.href = "/signup")}>
            SIGNUP
          </FooterLink>
          <FooterLink onClick={(event) => (window.location.href = "/login")}>
            LOGIN
          </FooterLink>
        </Column>
      </Row>

      <p>Copyright &copy; 2021 82 Learn Pty Ltd</p>
    </Container>
  </StyledFooter>
);

export default Footer;
