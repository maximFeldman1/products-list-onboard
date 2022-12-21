import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/App/AppRouter";
import { Header } from "./Components/Layout/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
