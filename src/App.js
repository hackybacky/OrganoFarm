import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  background-color:${({theme})=>theme.bg};
  flex: 7;
`;
const Wrapper = styled.div``;
export default function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <ThemeProvider theme={darkMode?darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main >
          <Navbar />
          <Wrapper>videocards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}
