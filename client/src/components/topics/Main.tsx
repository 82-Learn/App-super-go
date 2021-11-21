import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const TagComponent = styled.div`
  width: 100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top: -18px;
  margin-bottom: 500px;
`;

const Header = styled.h1`
  margin: 0;
  padding: 16px 16px;
  color: white;
  font-size: 40px;
  min-height: 6vh;
`;

const Body = styled.div`
  margin: 0;
  padding: 150px 150px;
  color: white;
  margin-left: 130px;
  margin-right: 100px;
  font-size: 15px;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 0px 30px #e70404;
  background-color: rgba(255, 255, 255, 0.15);
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border-radius: 3px;
  background-color: #d53838;
  color: white;
`;

const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  color: white;
  overflow: auto;
  font-size: 20px;
  border-radius: 30px;
  position: fixed;
  box-shadow: 0px 0px 30px #e70404;
  background-color: rgba(255, 255, 255, 0.15);
  & li {
    transition: all 300ms linear 00s;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1.5rem 1rem;
  padding-top: 1px;

  & li {
    transition: all 300ms linear 00s;
  }

  & a {
    font-size: 1rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 9px 10px;
    float: left;
    cursor: pointer;

    border-radius: 35px;
    line-height: 1.5em;

    &:hover {
      background-color: #ff6600;
      border-radius: 35px;
    }
  }
`;

interface Post {
  id: number;
  first_name: string;
  last_name: string;
}

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("dash");
      setPosts(res.data.Post);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <TagComponent>
      <Header>Dashboard</Header>
      <Sidebar></Sidebar>
      <Body>
        <div>
          <h1>Outline</h1>
          <ul>
            {posts.map((post) => (
              <>
                <li key={post.id}>{post.first_name}</li>
                <li key={post.id}>{post.last_name}</li>
              </>
            ))}
          </ul>
        </div>
      </Body>
    </TagComponent>
  );
};

export default Main;
