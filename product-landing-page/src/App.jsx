import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import './App.css'
import Home from "./pages/Home";
import Form from "./pages/form"

export default function App() {
  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/teste" element={<h1>Teste</h1>} />
          <Route path="/sign-up" element={<Form/>} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}

