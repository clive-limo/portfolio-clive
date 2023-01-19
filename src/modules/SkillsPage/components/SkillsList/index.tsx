import SkillsTab from './component/SkillsTab';

const SkillsList = () => {
  return (
    <div className="mx-auto flex flex-[.5] flex-row">
      <SkillsTab text="ui" key="ui" projects="15" />
      <SkillsTab text="Frontend" key="f-end" projects="12" />
      <SkillsTab text="Backend" key="b-end" projects="10" />
    </div>
  );
};
export default SkillsList;
