import React from "react";
import { Route, Switch } from 'react-router-dom';

import Register from "../Components/Register";
import InsureSelect from "../Components/InsureSelect";
import CarModel from "../Components/CarModel";
import InsureCompanies from "../Components/InsureCompanies";
import Discount from "../Components/Discount";

function routeHandler() {
  return (
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/insure-select" component={InsureSelect} />
      <Route path="/car" component={CarModel} />
      <Route path="/insure-company" component={InsureCompanies} />
      <Route path="/discount" component={Discount} />
    </Switch>
  );
}

export default routeHandler;
