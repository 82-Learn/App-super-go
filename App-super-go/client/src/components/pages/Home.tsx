import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const TagComponent = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
  background-color: #363c40;
`;

const Header = styled.h1`
  margin: 0;
  padding: 16px 16px;
  color: white;
  font-size: 45px;
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

interface CartItemType  {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const Home = () => {
  const [products, setProducts] = useState<CartItemType[]>([]);

  useEffect(() => {
    const fetproducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data.CartItemType);

    };
    fetproducts();
  }, []);

  console.log(products);



  return (
    <>
      <TagComponent>
        <Header>Welcome to 82 Learn</Header>
      </TagComponent>
    </>
  );
};

export default Home;