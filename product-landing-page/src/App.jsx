import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import './App.css'
import Home from "./pages/Home";
import Form from "./pages/form"
import Send from "./pages/send"

export default function App() {
  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/sign-up" element={<Form/>}/>
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

