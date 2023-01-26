import type { FC } from 'react';

import ProjectView from './components/ProjectsView';

const ProjectsPage: FC = () => {
  return (
    <div className="mt-[80px] flex h-full w-full flex-col bg-[url('/assets/images/animated_bg_4.svg')]">
      <div className="flex-[.3]">
        <p className="mt-[40px] p-1 text-center text-lg font-semibold text-accent">
          PROJECTS
        </p>
        <h1 className="p-1 text-center text-4xl font-semibold text-white xl:text-[50px]">
          Some of My Work
        </h1>
        <p className="mx-auto w-[700px] p-1 text-center font-light text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque vel nunc in ultrices. Vivamus luctus erat sed lectus
          euismod venenatis. Vivamus id lacus at nisl sollicitudin tempor
        </p>
      </div>
      <div className="mx-auto flex-[.65] overflow-y-auto bg-gray-50">
        <ProjectView />
      </div>
    </div>
  );
};

export default ProjectsPage;
