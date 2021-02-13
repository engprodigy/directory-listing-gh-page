import React, { Component, useContext, createContext, useState } from "react";
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import LandingPageDataTable from './Components/LandingPageDataTable';
import { BrowserRouter, 
  Route, 
  Switch, 
  Link,
  Redirect,
  useHistory,
  useLocation } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';

function App() {
  return (
    <ProvideAuth>
    <BrowserRouter>
    
    <Switch>
    <Route exact path="/" >
      <LandingPageDataTable />
     </Route>
    <Route path="/signup">
            <SignUp />
    </Route> 
    
    <PrivateRoute path="/protected">
              <Dashboard />
            </PrivateRoute>
    </Switch>
    </BrowserRouter>
    </ProvideAuth>
    
    
   
  );
}

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
