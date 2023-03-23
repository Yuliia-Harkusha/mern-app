import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from 'user/pages/Users';
import NewPlace from 'places/pages/NewPlace';
import UserPlaces from 'places/pages/UserPlaces';
import UpdatePlace from 'places/pages/UpdatePlace';
import Auth from 'user/pages/Auth';
import MainNavigation from 'shared/components/Navigation/MainNavigation';
import { AuthContext } from 'shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = useCallback(() => {
    setIsloggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsloggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />

        <Route redirectTo="/" />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route redirectTo="/auth" />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <MainNavigation />

      <main>{routes}</main>
    </AuthContext.Provider>
  );
};

export default App;
