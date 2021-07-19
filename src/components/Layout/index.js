import React from 'react';

import Sidenav from '../Sidenav';

import { Container } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <div className="side-nav">
        <Sidenav />
      </div>
      <div className="main-content">
        {children}
      </div>
    </Container>
  );
}

export default Layout;
