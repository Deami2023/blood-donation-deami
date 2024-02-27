import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Trainings } from "./components/Trainings";
import { About } from "./components/about";
import { Academics } from "./components/Academics";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Gallery } from "./components/Gallery";
import { Courses } from "./components/Courses";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const getClient = axios.get("/api/verus/") 
const postClient = axios.post("/api/verus/")
const deleteClient = axios.delete("/api/verus/")
const putClient = axios.put("/api/verus/")

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

 const [windowDimension, setWindowDimension] = useState(null);

	  useEffect(() => {
		      setWindowDimension(window.innerWidth);
		    }, []);

	  useEffect(() => {
		      function handleResize() {
			            setWindowDimension(window.innerWidth);
			          }

		      window.addEventListener("resize", handleResize);
		      return () => window.removeEventListener("resize", handleResize);
		    }, []);

	  const isMobile = windowDimension <= 640;

  return (
    <Styles.Wrapper>
    <CSSReset />

   

      <Navigation />
      <Header data={landingPageData.Header} />
      <Trainings data={landingPageData.Trainings} />
      <About data={landingPageData.About} />
      <Courses data={landingPageData.courses} />
      <Academics data={landingPageData.Academics} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </Styles.Wrapper>
  );
};


const Styles = {
	  Wrapper: styled.main`
	     font-family: "Open Sans", sans-serif;
	     text-rendering: optimizeLegibility !important;
	     -webkit-font-smoothing: antialiased !important;
	     color: #777;
	     font-weight: 400;
	     width: 100% !important;
	     height: 100% !important;
       viewport-height: 100%;
       viewport-width: 100%;
	  `,
};

const CSSReset = createGlobalStyle`
   *,
   *::before, 
   *::after {
   margin: 0; 
   padding: 0;
   box-sizing: inherit;
   }

   html {
   font-size: 62.5%; /*1rem = 10px*/
   box-sizing: border-box;    
	   }  

    body {
    font-size: 1.4rem;
    font-family: sans-serif;  
    }
	  `;
export default App;
