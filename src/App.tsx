import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./routes/Home";
import Setting from "./routes/Setting";
import Board from "./routes/Board";
import Layout from "./components/global/Layout/index";
import Schedule from "./routes/Schedule";
import SignupForm from "./components/auth/signup";
import LoginForm from "./components/auth/login";
import AuthContext from "./states/auth-context";

const queryClient = new QueryClient();

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {!authCtx.isLoggedIn && (
              <>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
              </>
            )}
            {authCtx.isLoggedIn && (
              <>
                <Route path="/board/*" element={<Board />} />
                <Route path="/setting/*" element={<Setting />} />
                <Route path="/schedule/*" element={<Schedule />} />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
