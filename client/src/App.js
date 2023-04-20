import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { StoreProvider } from "./utils/GlobalState";

import Home from "./pages/Home";
import Login from "./components/Login/index";
import Signup from "./components/Signup";
import Profile from "./components/UserProfile";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";
import AddRecipe from "./components/AddRecipe";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import EditRecipe from "./components/EditRecipe";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

console.log(client);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, [loggedIn]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Routes>
              {/* <Route path="/" element={loggedIn ? <Login /> : <Home />} /> need to add ! in front of loggedIn to make it work */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/add-recipe"
                element={
                  <ProtectedRoutes>
                    <AddRecipe />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoutes>
                    <Profile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/search"
                element={
                  <ProtectedRoutes>
                    <Search />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/recipes/:id"
                element={
                  <ProtectedRoutes>
                    <Recipe />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/edit-recipe/:id"
                element={
                  <ProtectedRoutes>
                    <EditRecipe />
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
