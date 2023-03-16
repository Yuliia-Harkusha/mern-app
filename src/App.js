import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from 'user/pages/Users';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="" element />
    </Routes>
  );
};

export default App;
