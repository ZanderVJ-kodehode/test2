import React from 'react';

// her er et basic array
const projects = [
  { id: 1, title: 'test1', description: 'her kan jeg forklare ting' },
  { id: 2, title: 'test2', description: 'her kan jeg forklare ting' },
  { id: 3, title: 'test3', description: 'her kan jeg forklare ting' },
  // kan lage flere om jeg vil
];

//  dette er en funksjon som returnere projects som <li>.map som vises
const ProjectList = () => {
  return (
    <ul>
      {projects.map((project) => (
        <li key = {project.title}>
          <strong>{project.title}</strong>: {project.description}
        </li>
      ))}
    </ul>
  );
};


export default ProjectList;

// om jeg skal bare ha projects inni
// export { projects };
