const NameView = () => {
  return (
    <div className="mt-[80px] flex flex-[0.3] flex-col">
      <div className="mx-auto mt-48">
        <div>
          <p className="text-4xl font-bold text-white xl:text-[50px]">Clive</p>
          <div className="flex flex-row">
            <p className="text-4xl font-bold text-white xl:text-[50px]">Limo</p>
            <p className="text-4xl font-bold text-accent xl:text-[50px]">.</p>
          </div>
        </div>
        <div className="my-5 h-[1px] w-[50px] bg-accent" />
        <div className="flex flex-row">
          <p className="my-auto font-light text-white">Github</p>
          <div className="mx-2 my-auto h-3 w-[1px] bg-white" />
          <p className="my-auto font-light text-white">LinkedIn</p>
        </div>
        <div className="flex flex-row">
          <p className="my-auto font-light text-white">Instagram</p>
          <div className="mx-2 my-auto h-3 w-[1px] bg-white" />
          <p className="my-auto font-light text-white">Twitter</p>
        </div>
        <button className=" my-10 w-[150px] border-[2px] border-accent">
          <p className="p-2 font-light text-accent">CONTACT ME</p>
        </button>
      </div>
    </div>
  );
};

export default NameView;
