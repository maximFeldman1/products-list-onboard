import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/App/AppRouter";
import { Header } from "./components/Layout/Header";
import { ModalProvider } from "./ui-kit/modal";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </ModalProvider>
  </QueryClientProvider>
);

export default App;
