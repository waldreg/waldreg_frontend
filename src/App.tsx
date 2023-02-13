import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import SignUp from "./routes/Auth/SignUp";
import Home from "./routes/Home";
import Setting from "./routes/Setting";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import Home from "./routes/Home";
import Setting from "./routes/Setting";
import Board from "./routes/Board";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/setting/*" element={<Setting />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
