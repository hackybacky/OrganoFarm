import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import Clogo from "../img/logo.png";
import { useSelector } from "react-redux";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Upload from "./Upload.jsx";

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
  color :${({ theme }) => theme.text}
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
  width:100%;
  border: none;
  outline:none;
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
  color : ${({ theme }) => theme.text}

`;
const Avatar = styled.img`
  height: 32 px;
  width: 32px;
  border-radius: 50%;
  background-color: #999;
`;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [q,setQ]=useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate= useNavigate();
  // console.log(currentUser);
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={Clogo} />
              OrganoFarm
            </Logo>
          </Link>
          <Search >
            <Input placeholder="search" onChange={(e)=>setQ(e.target.value)} />
            <SearchIcon onClick={()=>navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen}/>}
    </>
  );
}
