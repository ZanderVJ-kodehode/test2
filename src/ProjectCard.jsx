// dette er ProjectCard som jeg bruker for og lage 2 square,
// en med layout inni og en med bilde

import React from 'react';
import Layout from './Layout';
import ProjectList from './ProjectList'; // Bruk standard eksport

// her ar jeg laget 3 square.
// en er for og ha en layout(child) inni
// en er for og sette inn et bilde
// en er for og sette in et array/list
const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="square square1">
        <Layout />
      </div>

      <div className="square square2">
        {/* sånn jeg satt det opp skulle bilde vise men fikk ikke det til. prøvde og finne det ut men klarte det ikke. */}
        {/* <img src="img.jpg" alt="natur" /> */}
      </div>
      
      <div className="square square3">
        {/* her adda jeg min array inni */}
      <ProjectList />
      </div>

    </div>
  );
};

export default ProjectCard;
