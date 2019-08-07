import React, { Component } from "react";
import { Layout, Icon, Menu } from "antd";
import Classes from "../../../index.module.css";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { Sider } = Layout;
    return (
      <Sider
        trigger={null}
        theme="light"
        collapsible
        collapsed={this.state.collapsed}
      >
        <Icon
          className="trigger"
          type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.toggle}
          style={{
            fontSize: 25,
            marginTop: 25,
            paddingRight: this.state.collapsed ? 0 : 10,
            textAlign: this.state.collapsed ? "center" : "right",
            width: "100%"
          }}
        />
        <Menu
          theme="light"
          mode="inline"
          className={Classes.sideNav}
          defaultSelectedKeys={[this.props.menuSelect]}
        >
          <Menu.Item key="1">
            <Link to="/me">
              <Icon type="user" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/attendance">
              <Icon type="calendar" />
              <span>Attendance</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/assignments">
              <Icon type="book" />
              <span>Assignments</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="setting" />
            <span>Settings</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/login">
              <Icon type="logout" />
              <span>Logout</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;
