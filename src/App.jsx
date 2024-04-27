import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Banner from './components/Banner'; 

import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  function choosePage() {
    switch (currentPage) {
      case 'AboutMe': 
        return <AboutMe />
      case 'Work':
        return <Project />
      case 'Contact':
        return <Footer />
    }
  }
  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      <Banner />
      { choosePage() }
    </div>
  );
}

export default App;
