import SkillsIntro from './components/SkillsIntro';
import SkillsList from './components/SkillsList';

const SkillsPage = () => {
  return (
    <div className="flex h-full w-full flex-col bg-primary_light">
      <SkillsIntro />
      <SkillsList />
    </div>
  );
};

export default SkillsPage;
