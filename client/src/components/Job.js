import React from 'react';
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import { mdiAccountSchoolOutline, mdiIdentifier } from "@mdi/js";
import { Modal } from 'react-bootstrap';
import { useState } from 'react'

/*
function Job(props) {
    return (
        <Card>
            <Card.Body>
                <div>
                <b style={{ color: getColorByGrade(average) }}>{average}</b>{" "}
                <Job
                    job={props.job}
                    date={props.date}
                    place={props.place}
                />
                </div>
            </Card.Body>
        </Card>
    );
}

export default Job;
*/

function Job() {
  const [isModalShown, setShow] = useState(false);
  
  const handleShowModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);
  
  return (
    <>
    <Modal show={isModalShown} onHide={handleCloseModal}>
      <Modal.Header closeButton>
          <Modal.Title>Přehled známek</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                    
      </Modal.Body>
      <Modal.Footer>
                    
      </Modal.Footer>
    </Modal>

      <Icon
        path={mdiClipboardListOutline}
        style={{ color: "grey", cursor: "pointer" }}
        size={1}
        onClick={handleShowModal}
      />
    </>
  )
}
  
  export default Job;