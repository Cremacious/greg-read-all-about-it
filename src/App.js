import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignUp from './components/sign-up-form.component/sign-up-form.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
