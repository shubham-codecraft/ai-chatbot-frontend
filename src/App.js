import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import { authProtectedRoutes, publicRoutes } from './routes';
import './assets/css/style.css'
import Authmiddleware from './routes/route';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {
            publicRoutes.map((route, idx) => (
              <Route
                key={idx}
                exact={true}
                path={route.path}
                element={
                  <Authmiddleware
                    isAuthProtected={false}
                    component={route.component}
                  />
                }
              />
            ))
          }
          {
            (authProtectedRoutes || []).map((route, idx) => (
              <Route
                key={idx}
                exact={true}
                path={route.path}
                element={
                  <Authmiddleware
                    isAuthProtected={true}
                    component={route.component}
                  />
                }
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
