import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from './Components';

function Router(props) {
    return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    );
}

export default Router;