import IntroView from './components/IntroView';
import NameView from './components/NameView';
import PortraitView from './components/PortraitView';

const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-row bg-[url('/assets/images/home_large_bg.svg')] ">
      <NameView />
      <PortraitView />
      <IntroView />
    </div>
  );
};

export default HomePage;
