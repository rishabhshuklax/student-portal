import React, { Component } from "react";

import { Layout, Typography } from "antd";
import SideMenu from "../../UI Components/SideMenu/SideMenu";

import Classes from "../../../index.module.css";
class StudentPageLayout extends Component {
  render() {
    const { Header } = Layout;
    return (
      <Layout>
        <Header className={Classes.header} style={{}}>
          <Typography.Title
            level={1}
            style={{
              color: "white",
              fontWeight: "normal",
              margin: 0
            }}
          >
            Axios Portal
          </Typography.Title>
        </Header>
        <Layout>
          <SideMenu menuSelect={this.props.menuSelect} />
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default StudentPageLayout;
