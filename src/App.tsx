import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter";
import { Header } from "./Components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
