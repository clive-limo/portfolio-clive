import { AiOutlineArrowDown } from 'react-icons/ai';

const IntroView = () => {
  return (
    <div className="flex flex-[0.3]">
      <div className="mx-2 mt-48">
        <p className="p-2 text-lg font-semibold text-accent">INTRODUCTION</p>
        <h1 className="text-4xl font-semibold text-white xl:text-[50px]">
          Full Stack Web <br></br> Developer
        </h1>
        <p className="w-[450px] font-light text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque vel nunc in ultrices. Vivamus luctus erat sed lectus
          euismod venenatis. Vivamus id lacus at nisl sollicitudin tempor
        </p>
        <div className="my-5 flex flex-row">
          <p className="text-lg font-bold text-accent">Learn more</p>
          <AiOutlineArrowDown className="mx-1 my-auto text-lg text-accent" />
        </div>
      </div>
    </div>
  );
};

export default IntroView;
