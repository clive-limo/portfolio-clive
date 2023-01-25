import type { FC } from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoMdMailUnread } from 'react-icons/io';

import ContactButton from './components/ContactButtons';

const ContactsPage: FC = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[url('/assets/images/animated_bg_5.svg')]">
      <div className="mt-[80px]">
        <p className="mt-[40px] p-1 text-center text-lg font-semibold text-accent">
          CONTACTS
        </p>
        <p className="p-1 text-center text-4xl font-semibold text-white xl:text-[50px]">
          Get In Touch With Me.
        </p>
        <p className="mx-auto w-[700px] p-1 text-center font-light text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          finibus tellus, sed ultricies quam. Ut nec commodo orci. Donec nec
          viverra felis, eget tristique libero. Sed tempus dictum lobortis.
        </p>
      </div>
      <div className="mx-auto mt-5 flex flex-row">
        <ContactButton
          Name="EMAIL"
          ContactImage={<IoMdMailUnread className="text-accent" size={50} />}
          ContactInfo="info@gmail.com"
        />
        <ContactButton
          Name="LINKED IN"
          ContactImage={<BsLinkedin className="text-accent" size={50} />}
          ContactInfo="info@gmail.com"
        />
        <ContactButton
          Name="GITHUB"
          ContactImage={<BsGithub className="text-accent" size={50} />}
          ContactInfo="info@gmail.com"
        />
        <ContactButton
          Name="TWITTER"
          ContactImage={<BsTwitter className="text-accent" size={50} />}
          ContactInfo="info@gmail.com"
        />
      </div>
    </div>
  );
};

export default ContactsPage;
