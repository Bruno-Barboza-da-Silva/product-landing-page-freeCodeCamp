import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Form from "./pages/form/form";
import Send from "./pages/send/send";
import Error from "./pages/error/error";
import Manager from "./pages/manager/manager";
import Update from "./pages/update/update";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/send" element={<Send />} />
      <Route path="/contact-us" element={<Form />}/>
      <Route path="/update/:id" element={<Update />}/>
      <Route path="/manager" element={<Manager />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
