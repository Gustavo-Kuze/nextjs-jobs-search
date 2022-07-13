import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      </Head>
      <main id="app" className="d-flex flex-column h-100" data-testid="layout">
        <NavBar />
        {children}
      </main>
      <footer style={{
        padding: 0,
      }}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;








