import type { FC } from 'react';
import { BsVectorPen, BsWindowSidebar } from 'react-icons/bs';
import { FaFigma, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDatabricks,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si';

interface TabProps {
  text: String;
  projects: String;
}
const SkillsTab: FC<TabProps> = ({ text, projects }) => {
  if (text.toLowerCase() === 'frontend') {
    return (
      <div className="mx-3 flex h-[275px] w-[250px] flex-col rounded-sm bg-secondary_dark">
        <div className="mx-auto flex flex-1 flex-col">
          <div className="m-auto">
            <BsWindowSidebar
              className="mx-auto flex-[.5] text-white"
              size={70}
            />
            <p className="mt-2 text-center text-xl font-bold text-white">
              Front-End Dev
            </p>
            <p className="text-center font-light text-white">
              {projects} Projects
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-[.25]">
          <FaReact className="my-auto mx-1 text-accent" size={30} />
          <FaVuejs className="my-auto mx-1 text-accent" size={30} />
          <FaHtml5 className="my-auto mx-1 text-accent" size={30} />
          <IoLogoJavascript className="my-auto mx-1 text-accent" size={30} />
        </div>
      </div>
    );
  }
  if (text.toLowerCase() === 'backend') {
    return (
      <div className="mx-3 flex h-[275px] w-[250px] flex-col rounded-sm bg-secondary_dark">
        <div className="mx-auto flex flex-1 flex-col">
          <div className="m-auto">
            <SiDatabricks className="mx-auto flex-[.5] text-white" size={70} />
            <p className="text-center text-lg font-bold text-white">
              Back-End Dev
            </p>
            <p className="text-center font-light text-white">
              {projects} Projects
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-[.25]">
          <SiNextdotjs className="my-auto mx-1 text-accent" size={30} />
          <SiPostgresql className="my-auto mx-1 text-accent" size={30} />
          <SiMongodb className="my-auto mx-1 text-accent" size={30} />
        </div>
      </div>
    );
  }
  return (
    <div className="mx-3 flex h-[275px] w-[250px] flex-col rounded-sm bg-secondary_dark">
      <div className="mx-auto flex flex-1 flex-col">
        <div className="m-auto">
          <BsVectorPen className="mx-auto flex-[.5] text-white" size={70} />
          <p className="mt-2 text-center text-xl font-bold text-white">
            UI/UX Design
          </p>
          <p className="text-center font-light text-white">
            {projects} Projects
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-[.25]">
        <FaFigma className="my-auto mx-1 text-accent" size={30} />
        <SiAdobephotoshop className="my-auto mx-1 text-accent" size={30} />
        <SiAdobexd className="my-auto mx-1 text-accent" size={30} />
      </div>
    </div>
  );
};

export default SkillsTab;
