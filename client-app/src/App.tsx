import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/components/NavBar';
import { Container } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/components/Footer';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function App() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }


    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  return (
    <Fragment>
      <NavBar />
      <div style={{ marginBottom: "15px", minHeight: (windowDimensions.height - 383) + "px" }}>
        <Container fluid textAlign='center'>

          <Outlet />
        </Container>
      </div>
      <Footer />
    </Fragment >
  );
}

export default App;
