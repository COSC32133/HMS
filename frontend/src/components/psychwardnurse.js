import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

export default class psychwardnurse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nurses: [],
    };
  }

  componentDidMount() {
    this.retrieveNurses();
  }

  onDelete = (id) => {
    axios.delete(`/nurse/delete_nursesched/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveNurses();
    });
  };
  retrieveNurses() {
    axios.get("/nurses/get_PsychNurseSchedule").then((res) => {
      if (res.data.success) {
        this.setState({
          nurses: res.data.existingNurses,
        });

        console.log(this.state.nurses);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar />

        <div className="row">
          <div className="col-lg-12 mt-4 mb-2">
            <h4 style={{ textAlign: "center" }}>
              Psychiatric Ward - Nurses Schedules
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-4 mb-2">
            <table
              className="table table-hover"
              style={{ marginTop: "40px" }}
              id="content"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nurse_ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th scope="col">Saturday</th>
                  <th scope="col">Sunday</th>
                </tr>
              </thead>

              <tbody>
                {this.state.nurses.map((nurses, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{nurses.mid}</td>
                    <td>{nurses.name}</td>
                    <td>{nurses.monday}</td>
                    <td>{nurses.tuesday}</td>
                    <td>{nurses.wednesday}</td>
                    <td>{nurses.thursday}</td>
                    <td>{nurses.friday}</td>
                    <td>{nurses.saturday}</td>
                    <td>{nurses.sunday}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/update_nurseSchedule/${nurses._id}`}
                      >
                        <i className="fas fa-edit"></i>
                      </a>{" "}
                      &nbsp;
                      {/* <a className="btn btn-danger"  href="#" onClick={() =>this.onDelete(nurses._id)}><i className="far fa-trash-alt"></i></a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
