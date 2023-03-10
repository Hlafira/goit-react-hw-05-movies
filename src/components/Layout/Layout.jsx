import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<p>"..loading "</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
