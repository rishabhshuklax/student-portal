import React, { Component } from "react";
import { Divider } from "antd";

import StudentPageLayout from "../Layout/StudentPageLayout";

/* import Classes from "./Assignment.module.css";
import AssignmentList from "../../UI Components/AssignmentList/AssignmentList"; */
import AssignmentsTab from "../../UI Components/AssignmentsTab/AssignmentsTab";

// const { TabPane } = Tabs;

const data = [
  {
    title: "Assignment 1",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "Assignment 2",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "Assignment 3",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "Assignment 4",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "Assignment 5",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "Assignment 5",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  }
];

class AssignmentHome extends Component {
  state = {
    tabData: ["SMAT330C", "IOPS332C", "ITOC330C", "IOOM332C", "EMIP332C"]
  };
  render() {
    return (
      <StudentPageLayout menuSelect="3">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            overflow: "scroll",
            flexWrap: "wrap"
          }}
        >
          <AssignmentsTab
            title="On-Going"
            data={data}
            tabData={this.state.tabData}
          />
          {window.innerWidth === 650 ? <Divider /> : null}
          <AssignmentsTab
            data={data}
            tabData={this.state.tabData}
            isCompleted={true}
            title="Completed"
          />
        </div>
      </StudentPageLayout>
    );
  }
}

export default AssignmentHome;
