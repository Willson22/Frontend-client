import React from "react";
import Job from "./Job";

function JobGridList(props) {
    return (
        <div class="row">
          {props.jobList.map((job) => {
            return (
              <div
                class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                style={{ paddingBottom: "16px" }}
              >
                <Job key={job.id} job={job} />
              </div>
            );
          })}
        </div>
      );
}

export default JobGridList;