function JobForm({ job, date, place}) {
    const handleClose = () => setAddGradeShow(false);

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Přehled známek</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          </Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
      </>
    )  }
  
  export default JobForm;