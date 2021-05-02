import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from 'reactstrap';

const Layout:React.FC = ({ children }) => {
    return (
      <>
        <Navbar />
        <Container fluid>{children}</Container>
        <Footer />
      </>
    );
}

export default Layout
