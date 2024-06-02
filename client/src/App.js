import { useEffect, useState } from "react";
import './App.css';
/*
import ReactDOM from "react-dom/client";

import Area from './components/Area';
import JobList from './components/JobsList';

import styles from "./css/area.module.css";
*/

import { Outlet, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import Icon from "@mdi/react";
import { mdiLoading, mdiAlertOctagonOutline } from "@mdi/js";
import 'bootstrap/dist/css/bootstrap.min.css'


const area = {
  place: "Praha"
};

/*
const jobList = [
  { title: "Programátor",
    date: "22.2.2024"
  }
]

function getJobList(jobList) {
  return jobList.map((job) => {
    return (
      <div key={job.id}>
        <div>{job.title}</div>
        <div>{job.date}</div>
        <div>{job.description}</div>
      </div>
    );
  });
}
*/

function App() {

  let navigate = useNavigate();

  const [listJobCall, selistJobCall] = useState({
    state: "pending",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/classroom/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setListJobCall({ state: "error", error: responseJson });
      } else {
        setListJobCall({ state: "success", data: responseJson });
      }
    });
  }, []);
/*
  const [jobCreateCall, setJobCreateCall] = useState({
    state: "pending",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/job/create`, {
      method: "CREATE",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setJobCreateCall({ state: "error", error: responseJson });
      } else {
        setJobCreateCall({ state: "success", data: responseJson });
      }
    });
  }, []);
*/

  //   return (<div jobTitle="App">{getChild()}</div>);

  return (
    <div className="App">
      <Navbar
        fixed="top"
        expand={"sm"}
        className="mb-3"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            Jedna Práce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Práce
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {getJobListDropdown()}
                <Nav.Link>
                 Práce
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

function getJobListDropdown() {
  switch (listJobCall.state) {
    case "pending":
      return (
        <Nav.Link disabled={true}>
          <Icon size={1} path={mdiLoading} spin={true} /> Job List
        </Nav.Link>
      );
    case "success":
      return (
        <NavDropdown title="Select Job" id="navbarScrollingDropdown">
          {listJobCall.data.map((job) => {
            return (
              <NavDropdown.Item
                onClick={() =>
                  navigate("/jobDetail?id=" + job.id)
                }
              >
                {job.name}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    case "error":
      return (
        <div>
          <Icon size={1} path={mdiAlertOctagonOutline} /> Error
        </div>
      );
    default:
      return null;
  }
}

/*
  return (
    <div jobTitle="App">
      <Area place={area.place} />
      <JobList jobList={jobList} />
    </div>
  );
}
*/

export default App;