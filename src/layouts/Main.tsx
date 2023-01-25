import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-full text-gray-700 antialiased">
    {props.meta}
    <div className="h-full flex flex-col">{props.children}</div>
  </div>
);

export { Main };
