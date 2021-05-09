import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Figure } from "react-bootstrap";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className="p-3">
        <div className="d-block mx-auto text-center">
        <Figure>
          <p className="font-weight-light">
            The Crowdsourced resources to fight COVID across Jalgaon District. Find hospital beds, oxygen, plasma, and more.
          </p>
          <figcaption className="blockquote-footer">
            From the Citizens, To the Citizens
          </figcaption>
        </Figure>
        </div>
      
      </Container>
      <Container fluid className="border-top">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
