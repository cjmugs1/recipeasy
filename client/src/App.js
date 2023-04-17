import { React, useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { loggedIn } from './utils/auth';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Login from './components/Login/index';
// import Signup from './components/Signup/';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Recipes from './pages/Recipes';
import AddRecipe from './components/AddRecipe';

// import { useRecipeasyReducer } from './utils/reducers';
// import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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

console.log(client)

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  }, [loggedIn]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Routes>
              <Route path="/" element={loggedIn ? <Login /> : <Home />} /> {/*need to add ! in front of loggedIn to make it work*/}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/donation" element={<Success />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/recipes/:id" element={<Recipes />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
