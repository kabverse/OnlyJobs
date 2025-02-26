import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/Webpage/NavBar/NavBar";
import Header from "./Components/Webpage/Header/Header";
import Features from "./Components/Webpage/Features/Features";
import Pricing from "./Components/Webpage/Pricing/Pricing";
import SuccessStory from "./Components/Webpage/SuccessStory/SuccessStory";
import Numbers from "./Components/Webpage/Numbers/Numbers";
import Work from "./Components/Webpage/Work/Work";
import FAQ from "./Components/Webpage/FAQ/FAQ";
import Newsletter from "./Components/Webpage/Newsletter/Newsletter";
import Footer from "./Components/Webpage/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Features />
      <Pricing />
      <SuccessStory />
      <Numbers />
      <Work />
      <FAQ />
      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;
