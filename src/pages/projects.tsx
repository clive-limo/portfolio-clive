import type { FC } from 'react';

import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/Meta';
import NavBar from '@/modules/NavBar';
import ProjectsPage from '@/modules/ProjectsPage';

const Projects: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="Clive Portfolio"
          description="Clive Limo. Fullstack Software Developer"
        />
      }
    >
      <NavBar />
      <ProjectsPage />
    </Main>
  );
};

export default Projects;
