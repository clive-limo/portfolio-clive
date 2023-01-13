import clsx from 'clsx';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="fixed flex h-20 w-full flex-row bg-primary_light">
      <p className="m-auto flex-[0.15] font-montserrat font-bold text-white">
        CL
      </p>
      <span className="flex-[0.4]" />
      <button className="flex-[0.1]">
        <p
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            currentPage === 'home'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </p>
      </button>
      <button className="flex-[0.1]">
        <p
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            currentPage === 'skills'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
          onClick={() => setCurrentPage('skills')}
        >
          Skills
        </p>
      </button>
      <button className="flex-[0.1]">
        <p
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            currentPage === 'projects'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
          onClick={() => setCurrentPage('projects')}
        >
          Projects
        </p>
      </button>
      <button className="flex-[0.1]">
        <p
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            currentPage === 'contact'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
          onClick={() => setCurrentPage('contact')}
        >
          Contact
        </p>
      </button>
      <div className="my-auto mx-2 h-10 w-[1px] bg-white" />
      <div className="flex flex-[0.08]">
        <AiFillGithub className="m-auto h-5 w-5 text-white" />
        <AiFillLinkedin className="m-auto h-5 w-5 text-white" />
        <AiOutlineTwitter className="m-auto h-5 w-5 text-white" />
      </div>
      <span className="flex-[0.15]" />
    </div>
  );
};

export default NavBar;
