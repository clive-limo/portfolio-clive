import Image from 'next/image';

const PortraitView = () => {
  return (
    <div className="relative flex-[0.4] mt-[80px]">
      <div className="absolute flex h-full w-full">
        <div className="m-auto">
          <Image
            height={703}
            width={256}
            alt="Clive 3D Portrait"
            src="/assets/images/clive-animation.png"
            className="z-10 m-auto"
          />
        </div>
      </div>
      <div className="absolute flex h-full w-full">
        <div className="m-auto h-[450px] w-[450px] rounded-full bg-primary_dark"></div>
      </div>
    </div>
  );
};

export default PortraitView;
