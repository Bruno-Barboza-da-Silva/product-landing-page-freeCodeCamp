import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import './App.css'
import Home from "./pages/Home";
import Form from "./pages/form"
import Send from "./pages/send"
import Error from "./pages/error"



export default function App() {
  return (
      <Routes>

          <Route path='/' element={<Home/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/contact-us" element={<Form/>}/>
          <Route path="*" element={<Error />} />
      </Routes>
  );
}




