import React from 'react'
import styled from 'styled-components'
import OrganoFarm from '../img/logo.png'
import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
const Container=styled.div`
  flex:1;
  background-color:#202020;
  height:100vh;
  color:white;
  font-size:14px;
`;
const Wrapper=styled.div`
  padding :18px 26px;
`;
const Logo=styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  margin-bottom:25px;
  font-weight:bold;
`;

const Img=styled.img`
  height:25px;
`;
const Item = styled.div`
  align-items:center;
  gap:20px;
  display:flex;
  cursor:pointer;
  padding:7.5px 0px;
`;
const Hr = styled.hr`
  margin:15px 0px;
  border:0.5px solid #373737;
`;
const Login=styled.div`
`;
const Button = styled.div`

`;
export default function Menu() {
  return (
    <Container>

      <Wrapper>
        <Logo>
          <Img src={OrganoFarm}/>
          OrganoFarm
        </Logo>
       

        <Item>
            <HomeIcon/>
            Home
        </Item>
        <Item>
            <ExploreIcon/>
            Explore
        </Item>
        <Item>
            <SubscriptionsIcon/>
            Subscriptions
        </Item>
        <Item>
          <VideoLibraryIcon/>
          Library
        </Item>
        <Item>
            <HistoryIcon/>
            History
        </Item>
        <Hr/>
        <Login>
          sign in to the account
          <Button>SIGN IN</Button>
        </Login>
        <Hr/>
      </Wrapper>
    </Container>
  )
}
