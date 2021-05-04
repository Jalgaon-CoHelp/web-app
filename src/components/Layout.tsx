import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

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
