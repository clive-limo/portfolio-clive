import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/Meta';
import NavBar from '@/modules/NavBar';
import SkillsPage from '@/modules/SkillsPage';

const Skills = () => {
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
      <SkillsPage />
    </Main>
  );
};

export default Skills;
