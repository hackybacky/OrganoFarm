import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  flex: 7;
`;
const Wrapper = styled.div``;
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="video">
                    <Route path=":id" element={<Video/>}/>
                  </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
