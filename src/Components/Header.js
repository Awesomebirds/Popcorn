import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Nav = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 18px;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 3px
    ${(props) => (props.current ? "#e50814" : "transparent")};
  transition: border-bottom ease-in-out 0.3s;
`;

const SLink = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 20px 20px;
  margin: 0 10px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Nav>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/TV"}>
        <SLink to="/TV">TV</SLink>
      </Item>
      <Item current={pathname === "/Search"}>
        <SLink to="/Search">Search</SLink>
      </Item>
    </Nav>
  </Header>
));
