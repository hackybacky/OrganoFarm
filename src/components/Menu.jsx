import React from 'react'
import styled from 'styled-components'
import OrganoFarm from '../img/logo.png'
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
  
`;
export default function Menu() {
  return (
    <Container>

      <Wrapper>
        <Logo>
          <Img src={OrganoFarm}/>
          OrganoFarm
        </Logo>
      </Wrapper>
    </Container>
  )
}
