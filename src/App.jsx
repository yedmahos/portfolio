import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="pt-16 md:pt-0">
        <Hero />
        <Education />
        <Projects />
        <Achievements />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}

export default App;
