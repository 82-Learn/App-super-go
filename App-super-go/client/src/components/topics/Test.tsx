import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const TagComponent = styled.div`

  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
  color: white;
  background-color: grey;
`;


const Heading = styled.h1`
  font-size: 50px;
 font-weight: 900;
  text-align: center;
padding-top: 30px;
`;





const Test = () => {


    return (
        <TagComponent>
            <Heading>Testing PAGE</Heading>
                <div>
                    
                    <p>starting this </p>
                </div>
        </TagComponent>
    
    );
};

export default Test;
