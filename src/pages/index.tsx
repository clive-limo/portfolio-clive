import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/Meta';
import HomePage from '@/modules/HomePage';
import NavBar from '@/modules/NavBar';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Clive Portfolio"
          description="Clive Limo. Fullstack Software Developer"
        />
      }
    >
      <NavBar />
      <HomePage />
    </Main>
  );
};

export default Index;
