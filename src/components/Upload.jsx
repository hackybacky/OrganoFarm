import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`

  width:100%;
  height:100%;
  position :absolute;
  top:0;
  left:0;
  background-color:black;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Wrapper = styled.div`
  height:600px;
  width:600px;
  background-color:${({theme})=>theme.bgLighter};
  color : ${({theme})=>theme.text};
  padding:20px;
  display:flex;
  flex-direction:column;
  gap:20px;
  position:relative;
  `;
  
  const Close =styled.div`
  
  position : absolute;
  top:10px;
  right:10px;
  cursor : pointer;
  `
  
  const Title =styled.h1`
  text-align :center;

`
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;
const Upload = ({setOpen}) => {
  const [img, setImg]=useState(undefined);
  const [video , setVideo]=useState(undefined);
  return (
    <Container>
      <Wrapper>
          <Close onClick={()=>{setOpen(false);console.log("hello")}}>X</Close>
          <Title>Upload a video</Title>
          <Label>Video : </Label>
          <Input type ="file" accept="video/*"/>
          <Input type ="text" placeholder='title'/>
          <Desc placeholder='Description' row={8}/>
          <Input type ="text" placeholder='seperate the tags with commas'/>
          <Label>Image</Label>
          <Input type ="file" accept="image/*"/>
          <Button>Upload</Button>
      </Wrapper>
    </Container>
  )
}

export default Upload;
