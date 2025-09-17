import React from "react";
import "./App.css";

import Header from "./components/Header";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Courses />
        <Benefits />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
