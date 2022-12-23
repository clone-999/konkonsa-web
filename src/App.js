import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Room from './pages/Room';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room/:roomID' element={<Room />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
