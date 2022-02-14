import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    100: "#26394B",
  },
  sec: {
    100: "#FFC926",
  },
  bg: {
    100: "#eee",
  },
  footer: {
    100: "#f5f5f7",
  },
};
const Button = {
  variants: {
    solid: {
      _active: { outline: "none !important" },
      _focus: { boxShadow: "none" },
    },
  },
};
const theme = extendTheme({ colors, components: { Button } });
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
