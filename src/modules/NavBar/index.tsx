import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className="flex h-20 w-full flex-row bg-primary_light">
      <p className="m-auto flex-[0.15] font-montserrat font-bold text-white">
        CL
      </p>
      <span className="flex-[0.4]" />
      <Link href={'/'} className="flex-[0.1]">
        <a className="m-auto font-montserrat font-bold text-white">Home</a>
      </Link>
      <Link href={'/'} className="flex-[0.1]">
        <a className="m-auto font-montserrat font-bold text-white">Skills</a>
      </Link>
      <Link href={'/'} className="flex-[0.1]">
        <a className="m-auto font-montserrat font-bold text-white">Projects</a>
      </Link>
      <Link href={'/'} className="flex-[0.1]">
        <a className="m-auto font-montserrat font-bold text-white">Contact</a>
      </Link>
      <div className="my-auto h-10 w-[1px] bg-white" />
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
