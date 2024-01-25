import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import mainhome from "./components/mainhome";

//shenali

import Home from "./components/Home";
import Doctors from "./components/Doctors";
import CreateDoctor from "./components/CreateDoctor";
import EditDoctor from "./components/EditDoctor";
import DoctorDetails from "./components/DoctorDetails";
import Nurses from "./components/Nurses";
import CreateNurse from "./components/CreateNurse";
import EditNurse from "./components/EditNurse";
import NurseDetails from "./components/NurseDetails";
import Surgeons from "./components/Surgeons";
import CreateSurgeon from "./components/CreateSurgeon";
import EditSurgeon from "./components/EditSurgeon";
import SurgeonDetails from "./components/SurgeonDetails";
import NavBar from "./components/NavBar";
//import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={mainhome}></Route>

          <Route path="/get" exact component={Doctors}></Route>
          <Route path="/add_doctor" component={CreateDoctor}></Route>
          <Route path="/update_doctor/:id" component={EditDoctor}></Route>
          <Route path="/doctor/:id" component={DoctorDetails}></Route>

          <Route path="/get_nurses" exact component={Nurses}></Route>
          <Route path="/add_nurse" exact component={CreateNurse}></Route>
          <Route path="/update_nurse/:id" component={EditNurse}></Route>
          <Route path="/nurse/:id" component={NurseDetails}></Route>

          <Route path="/get_surgeons" exact component={Surgeons}></Route>
          <Route path="/add_surgeon" exact component={CreateSurgeon}></Route>
          <Route
            path="/update_surgeon/:id"
            exact
            component={EditSurgeon}
          ></Route>
          <Route path="/surgeon/:id" exact component={SurgeonDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
