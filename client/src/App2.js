import React from 'react';

import { About, Footer, Header, Skills, Projects } from './container';
import { Navbar } from './components';
import './App.scss';

const App2 = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App2;
