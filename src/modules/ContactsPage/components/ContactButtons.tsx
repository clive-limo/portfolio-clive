import type { FC, ReactNode } from 'react';

interface ButtonProps {
  Name: String;
  ContactInfo: String;
  ContactImage: ReactNode;
}
const ContactButton: FC<ButtonProps> = ({
  Name,
  ContactInfo,
  ContactImage,
}) => {
  return (
    <div className="m-1 flex h-[300px] w-[300px] flex-col">
      <div className="mx-[52px] flex flex-[.7] rounded-full bg-secondary_dark hover:border-[1px] hover:border-accent hover:transition-all">
        <div className="m-auto ">{ContactImage}</div>
      </div>
      <p className="mt-1 flex-[.05] text-center font-semibold text-white">
        {Name}
      </p>
      <p className="flex-[.05] text-center font-light text-white">
        {ContactInfo}
      </p>
    </div>
  );
};

export default ContactButton;
