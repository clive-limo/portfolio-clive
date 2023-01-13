import IntroView from './components/IntroView';
import NameView from './components/NameView';
import PortraitView from './components/PortraitView';

const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-row bg-primary_light ">
      <NameView />
      <PortraitView />
      <IntroView />
    </div>
  );
};

export default HomePage;
