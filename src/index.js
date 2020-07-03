import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./header";
import { theme as defaultTheme, ThemeProvider, CSSReset } from "@chakra-ui/core";



const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brandBackground: "#FFFFFF",
    cookieBar: "#D6D6D6",
    cookieBarText: "#010101",
    cookieBarLink: "#EF7B38",
    menuText: "#333333",
    buttonColor: "#EB575A"
  },
  fontSizes:{
    ...defaultTheme.fontSizes,
    cookieFont:"17px",
    menuFont:"13pt"
  }, 
  fonts: {
    ...defaultTheme.fonts,
    brandFont: 'HarmoniaSansW01-Regular',
    cookieText: 'HarmoniaSansW01-Black'
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
