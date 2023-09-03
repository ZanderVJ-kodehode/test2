import React from 'react';
// her sette jeg mine importer jeg vil vise
// har app.css
import './App.css';
// har ProjectCard
import ProjectCard from './ProjectCard';

// i denne har jeg laget en div med navn container som jeg har då satte in <ProjectCard/> som vil vises der
function App() {
  return (
    <>
      <div className="container">
        <ProjectCard />
      </div>
    </>
  );
}

export default App;
