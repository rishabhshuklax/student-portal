import React from "react";
import { Layout, Typography } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import SideMenu from "../../UI Components/SideMenu/SideMenu";

import Classes from "../../../index.module.css";
import StudentClasses from "./StudentHome.module.css";
const { Header, Content } = Layout;

class SiderDemo extends React.Component {
  render() {
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
          <SideMenu />
          <Content style={{}} className={StudentClasses.dashboard}>
            <DashboardCard
              imageURL="https://factohr.com/wp-content/uploads/2019/03/attendance-system/attendancesystem.png"
              title="Attendance"
            />
            <DashboardCard
              imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmgYEUwvWfI5ivwD5eXaBGzR35wdzrjI-B1MDYIBK9PJBSrwF-A"
              title="Assignments"
            />
            <DashboardCard
              imageURL="https://png.pngtree.com/svg/20150921/eb09b8c59e.svg"
              title="Settings"
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
