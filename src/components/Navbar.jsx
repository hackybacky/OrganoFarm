import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Clogo from "../img/logo.png";
import { useSelector } from "react-redux";
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 100;
`;
const Wrapper = styled.div`
  display:flex;
  align-items:center;
  height:100%;
  padding 0px 20px;
  position :relative;
  color :${({theme})=>theme.text}
`;

const Search = styled.div`
  width: 40%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 5px;
  border: 1px solid #ccc;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const Img = styled.img`
  height: 25px;
`;
const User = styled.div`
  display :flex,
  align-items : center,
  gap:10px,
  font-weight : 500,
  color : ${({theme})=>theme.text}

`;
const Avatar = styled.img`
  height : 32 px ;
  width :32px;
  border-radius : 50%;
  background-color:#999;
`;
export default function Navbar() {
  const currentUser = useSelector(state=>state.user.currentUser)
  console.log(currentUser);
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Clogo} />
            OrganoFarm
          </Logo>
        </Link>
        <Search>
          <Input placeholder="search" />
          <SearchIcon />
        </Search>
        { 
          
          currentUser?(
            <User>
              <VideoCallIcon/>
              <Avatar src ={currentUser.img}/>
              {currentUser.name}
            </User>
          ):<Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
        }
      </Wrapper>
    </Container>
  );
}
