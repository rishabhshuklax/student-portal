import React, { Component } from "react";
import { Tabs, Tag } from "antd";
import AssignmentList from "../AssignmentList/AssignmentList";
import Classes from "../../Student/Assignment/Assignment.module.css";
const { TabPane } = Tabs;

class AssignmentsTab extends Component {
  static defaultProps = {
    isCompleted: false
  };
  render() {
    return (
      <Tabs defaultActiveKey="2"  className={Classes.card}>
        {this.props.tabData.map((v, i) => (
          <TabPane
            tab={
              <span>
                {v}
                <Tag
                  color="#00000000"
                  style={{
                    borderRadius: "50%",
                    marginLeft: 5,
                    color: "black",
                    border: "rgba(0,0,0,0.1) 1px solid"
                  }}
                >
                  <strong>{Math.floor(Math.random() * 5)}</strong>
                </Tag>
              </span>
            }
            key={i}
          >
            <AssignmentList
              data={this.props.data}
              title={this.props.title}
              isCompleted={this.props.isCompleted}
            />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default AssignmentsTab;
