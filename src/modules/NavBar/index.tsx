import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="fixed flex h-20 w-full flex-row bg-primary_light">
      <p className="m-auto flex-[0.15] font-montserrat font-bold text-white">
        CL
      </p>
      <span className="flex-[0.4]" />
      <Link href="/" className="flex-[0.1]">
        <a
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            router.pathname === '/'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
        >
          Home
        </a>
      </Link>
      <Link href="/skills" className="flex-[0.1]">
        <a
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            router.pathname === '/skills'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
        >
          Skills
        </a>
      </Link>
      <Link href="/projects" className="flex-[0.1]">
        <a
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            router.pathname === '/projects'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
        >
          Projects
        </a>
      </Link>
      <Link href="contacts" className="flex-[0.1]">
        <a
          className={clsx(
            'm-auto font-montserrat font-bold text-white',
            router.pathname === '/contact'
              ? 'border-b-[1.5px] border-accent text-accent'
              : 'border-none text-white'
          )}
        >
          Contacts
        </a>
      </Link>
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
