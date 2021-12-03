import * as React from "react";
import styled from "styled-components";

const TagComponent = styled.div`
  min-height: 100vh;
  margin: auto;
  color: white;
  text-align: center;
`;

const NotFound = () => (
  <TagComponent>
    <h1>404 Not Found!</h1>
  </TagComponent>
);

export default NotFound;
