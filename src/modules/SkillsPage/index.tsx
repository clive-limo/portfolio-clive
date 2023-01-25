import SkillsIntro from './components/SkillsIntro';
import SkillsList from './components/SkillsList';

const SkillsPage = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[url('/assets/images/skills_large_bg.svg')]">
      <SkillsIntro />
      <SkillsList />
    </div>
  );
};

export default SkillsPage;
