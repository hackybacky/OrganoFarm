import React from 'react'
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.div`
  position:sticky;
  top:0;
  background-color:${({theme})=>theme.bgLighter};
  height:56px;

`;
const Wrapper=styled.div`
  display:flex;
  align-items:center;
  height:100%;
  padding 0px 20px;
  position :relative;
  justify-content:flex-end;
`;

const Search = styled.div`
  width:40%;
  left:0;
  right:0;
  position:absolute;
  margin:auto;
  align-items:center;
  justify-content:space-between;
  display:flex;
  padding:5px;
  border:1px solid #ccc;
`;
const Input = styled.input`
  background-color:transparent;
  border:none;
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


export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='search'/>
          <SearchIcon/>
        </Search>
        <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
      </Wrapper>
    </Container>
  )
}
