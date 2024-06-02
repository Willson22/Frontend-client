import React, { useState, useMemo } from "react";
import JobGridList from "./JobGridList";
import JobTableList from "./JobTableList";

import Job from "./Job";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline, mdiMagnify  } from "@mdi/js";
import styles from "../css/jobList.module.css";

function JobList(props) {
    const [viewType, setViewType] = useState("grid");
    const isGrid = viewType === "grid";
    const [searchBy, setSearchBy] = useState("");

    const filteredJobList = useMemo(() => {
        return props.jobList.filter((item) => {
          return (
            item.title
              .toLocaleLowerCase()
              .includes(searchBy.toLocaleLowerCase()) ||
            item.date.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
          );
        });
      }, [searchBy]);

    function handleSearch(event) {
        event.preventDefault();
        setSearchBy(event.target["searchInput"].value);
    }

    function handleSearchDelete(event) {
        if (!event.target.value) setSearchBy("");
    }
  
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="light">
          <div jobTitle="container-fluid">
            <Navbar.Brand>Seznam prací</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent: "right" }}>
                <Form jobTitle="d-flex" onSubmit={handleSearch}>
                <Form.Control
                    id={"searchInput"}
                    style={{ maxWidth: "150px" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearchDelete}
                />
                <Button
                    style={{ marginRight: "8px" }}
                    variant="outline-success"
                    type="submit"
                >
                    <Icon size={1} path={mdiMagnify} />
                </Button>
                </Form>
                <Button
                    className={"d-none d-md-block"}
                    variant="outline-primary"
                    onClick={() =>
                    setViewType((currentState) => {
                        if (currentState === "grid") return "table";
                        else return "grid";
                    })
                    }
                >
                    <Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
                    {isGrid ? "Tabulka" : "Grid"}
                </Button>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className={styles.jobList}>
        {filteredJobList.length ? (
          <div class="container">
            <div className={"d-block d-md-none"}>
              <JobGridList jobList={filteredJobList} />
            </div>
            <div className={"d-none d-md-block"}>
              {isGrid ? (
                <JobGridList jobList={filteredJobList} />
              ) : (
                <JobTableList jobList={filteredJobList} />
              )}
            </div>
          </div>
        ) : (
          <div style={{ margin: "16px auto", textAlign: "center" }}>
            Nejsou žádné práce ke zobrazení
          </div>
        )}
      </div>
      </div>
    );
  }

export default JobList;