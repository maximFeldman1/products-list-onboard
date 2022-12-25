import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/App/AppRouter";
import { Header } from "./components/Layout/Header";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
