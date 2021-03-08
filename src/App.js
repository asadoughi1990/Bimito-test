import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";

import RouteHandler from "./Routing/RouteHandler";
import Navbar from "./Components/Navbar";
import CarImage from "./Components/CarImage";


function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar />
        <RouteHandler />
        <CarImage />
      </Container>
    </BrowserRouter>
  );
}

export default App;
