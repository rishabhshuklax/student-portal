import React, { Component } from "react";

import { List, Avatar, Typography, Button } from "antd";
import AssignmetModal from "../AssignmentModal/AssignmentModal";

class AssignmentList extends Component {
  static defaultProps = {
    isCompleted: false
  };
  render() {
    return (
      <List
        style={{ padding: "0px 20px" }}
        itemLayout="vertical"
        dataSource={this.props.data.filter(
          v => Math.floor(Math.random() * 10) > 5
        )}
        header={
          <Typography.Title level={2} style={{ fontWeight: "normal" }}>
            {this.props.title}
          </Typography.Title>
        }
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://ui-ex.com/images/book-svg-pen-1.png" />
              }
              title={<AssignmetModal title={item.title} />}
              description={
                <>
                  <Typography.Text>{item.desc}</Typography.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: 10,
                      flexWrap: "wrap"
                    }}
                  >
                    <Button type="link" icon="download">
                      Download
                    </Button>
                    {this.props.isCompleted ? null : (
                      <Button type="link" icon="upload">
                        Upload
                      </Button>
                    )}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default AssignmentList;
