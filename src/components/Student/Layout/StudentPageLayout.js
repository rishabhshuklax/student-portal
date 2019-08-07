import React, { Component } from "react";

import { Layout } from "antd";
import SideMenu from "../../UI Components/SideMenu/SideMenu";

import Header from "../../UI Components/Header/Header";
class StudentPageLayout extends Component {
  render() {
    // const { Header } = Layout;
    return (
      <Layout>
        <Header />
        <Layout style={{ background: "white" }}>
          <SideMenu menuSelect={this.props.menuSelect} />
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default StudentPageLayout;
