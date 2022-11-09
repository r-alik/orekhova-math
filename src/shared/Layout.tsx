import { ReactNode } from 'react';

const Layout = ({
  idName,
  children,
}: {
  idName?: string;
  children: ReactNode;
}) => {
  return (
    <section id={idName} className='sm:w-2/3 w-11/12 h-full mx-auto px-2 py-4'>
      {children}
    </section>
  );
};

export default Layout;
