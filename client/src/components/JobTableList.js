import React from "react";
import Table from "react-bootstrap/Table";

function JobTableList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.jobList.map((job) => {
          return (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.date}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default JobTableList;