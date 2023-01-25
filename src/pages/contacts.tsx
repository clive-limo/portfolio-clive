import type { FC } from 'react';

import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/Meta';
import ContactsPage from '@/modules/ContactsPage';
import NavBar from '@/modules/NavBar';

const Contacts: FC = () => {
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
      <ContactsPage />
    </Main>
  );
};

export default Contacts;
