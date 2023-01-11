import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import WelcomePage from './pages/Homepage';
import SecuredPage from './pages/Securedpage';
import PrivateRoute from './helpers/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    keycloak.token && localStorage.setItem('token', keycloak.token);
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            path="/secured"
            element={
              <PrivateRoute>
                <SecuredPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
