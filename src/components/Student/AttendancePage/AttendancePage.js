import React, { Component } from "react";
import AttendanceCard from "../../UI Components/Calender/AttendanceCard";
import StudentPageLayout from "../Layout/StudentPageLayout";
import { Typography } from "antd";

class AttendancePage extends Component {
  render() {
    return (
      <StudentPageLayout menuSelect="2">
      <div style={{marginTop: 20,overflow: 'scroll',width: '100%'}}>
      <Typography.Title  style={{textAlign: "center",color: "rgba(0,0,0,0.6)",fontWeight: "normal"}}>Subject Wise Attendance Percent</Typography.Title>
        <div className="attendance-page">
          <AttendanceCard subject="SMAT330C" attendance={{p: 60,a: 40}} />
          <AttendanceCard subject="IOPS332C" attendance={{p: 70,a: 30}}/>
          <AttendanceCard subject="ITOC330C" attendance={{p: 50,a: 45}}/>
          <AttendanceCard subject="IOOM332C" attendance={{p: 75,a: 25}}/>
          <AttendanceCard subject="EMIP332C" attendance={{p: 85,a: 15}}/>
        </div></div>
      </StudentPageLayout>
    );
  }
}

export default AttendancePage;
