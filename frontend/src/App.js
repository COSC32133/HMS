import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import mainhome from "./components/mainhome";

//shanali

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


//vimansa
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import EquiHome from "./components/EquiHome";
import PostDetails from "./components/PostDetails";

//avishka
import Createguard from "./components/Createguard";
import editguard from "./components/Editguard";
import secHome from "./components/sechome";
import AddGuardList from "./components/AddGuardList";

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


          <Route path="/eqhome" component={EquiHome}></Route>
          <Route path="/addeq" component={CreatePost}></Route>
          <Route path="/editeq/:id" component={EditPost}></Route>
          <Route path="/posteq/:id" component={PostDetails}></Route>

          <Route path="/sechome" exact component={secHome}></Route>
          <Route path="/add" component={Createguard}></Route>
          <Route path="/editsec/:id" component={editguard}></Route>
          <Route path="/post/:id" component={Secdetails}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/addguard" component={AddGuardList}></Route>

        </div>
      </BrowserRouter>
    );
  }
}
