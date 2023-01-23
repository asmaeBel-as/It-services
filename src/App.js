import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import AboutUs from "./Components/AboutUs/about";
import Careers from "./Components/Careers/careers";
import Services from "./Components/Services/services";
import Footer from "./Components/Footer/footer";
import Blog from "./Components/Blog/blog";
import ContactUs from "./Components/ContactUs/contactUs";
import Technologies from "./Components/Technologies/technologies";
import Testimonials from "./Components/Testimonial/testimonial";
import Counter from './Components/Counter/counter';
import Card from './Components/Card/Card';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Founders from "./Components/Founders/Founders";


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            index
            element={
              <>
                <Navbar />
                <Outlet />
                <Home />
                <AboutUs />
                <Founders />
                <Services />
                <Counter />
                <Card />
                <Technologies />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contactUs"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />{" "}
          <Route
            exact
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          {/* <Navbar />
          <Home />
          <AboutUs />
          <Services />
          <Counter />
          <Card />
          <Technologies />
          <Testimonials />
          <ContactUs />
          <Footer /> */}
        </Routes>

        {/* 
      <Careers />
      
     
      
      <Blog />
      
       */}
      </>
    </BrowserRouter>
  );
}

export default App;
