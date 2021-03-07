import React from "react";

import Container from "react-bootstrap/Container";

import Navbar from "../Components/Navbar";
// import Register from "../Components/Register";
// import InsureSelect from "../Components/InsureSelect";
import CarModel from "../Components/CarModel";
import CarImage from "../Components/CarImage";

function container() {
  return (
    <React.Fragment>
      <Container fluid>
        <Navbar />
        <CarModel />
        <CarImage />
      </Container>
    </React.Fragment>
  );
}

export default container;
