import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Signup } from "../pages/auth/Signup";
import { HomePage } from "../pages/landingpage/HomePage";

interface ApprouteProps {}

export const Approute: React.FC<ApprouteProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
