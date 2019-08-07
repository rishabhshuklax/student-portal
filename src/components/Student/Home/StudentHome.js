import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";

import StudentClasses from "../StudentHome.module.css";

const { Content } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <StudentPageLayout menuSelect="1">
        <Content className={StudentClasses.dashboard}>
          <DashboardCard
            imageURL="https://factohr.com/wp-content/uploads/2019/03/attendance-system/attendancesystem.png"
            title="Attendance"
            link="/attendance"
          />
          <DashboardCard
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmgYEUwvWfI5ivwD5eXaBGzR35wdzrjI-B1MDYIBK9PJBSrwF-A"
            title="Assignments"
            link="/assignments"
          />
          <DashboardCard
            imageURL="https://png.pngtree.com/svg/20150921/eb09b8c59e.svg"
            title="Settings"
            link="/settings"
          />
        </Content>
      </StudentPageLayout>
    );
  }
}
export default SiderDemo;
