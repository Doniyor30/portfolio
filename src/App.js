import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Languages from './components/Languages'; // Импортируем новый компонент
import Hobbies from './components/Hobbies'; // Импортируем новый компонент
import './App.css';
import Education from './components/Education';
import Courses from './components/Courses';


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#courses">Courses</a>
          <a href="#skills">Skills</a>
          <a href="#languages">Languages</a> {/* Добавляем ссылки на новые разделы */}
          <a href="#hobbies">Hobbies</a> {/* Добавляем ссылки на новые разделы */}
          <a href="#contact">Contact</a>
          
        </nav>
      </header>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="languages"> {/* Раздел для языков */}
          <Languages />
        </section>
        <section id="hobbies"> {/* Раздел для хобби */}
          <Hobbies />
        </section>
        <section id="contact">
          <Contact />
        </section>
        
      <footer>
        <p>© 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;
