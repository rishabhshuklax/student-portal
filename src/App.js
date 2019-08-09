import React, { Component } from "react";
import { Icon, Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import StudentHome from "./components/Student/Home/StudentHome";
import WrappedNormalLoginForm from "./components/Login/Login";
import AttendancePage from "./components/Student/AttendancePage/AttendancePage";
import Header from "./components/UI Components/Header/Header";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Classes from "./index.module.css";
import Error404 from "./components/Error404/Error404";
import AssignmentHome from "./components/Student/Assignment/AssignmentHome";
import WrappedRegistrationForm from "./components/Register/Register";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/me" exact component={StudentHome} />
          <Route
            path="/login"
            exact
            component={() => {
              return (
                <>
                  <Header />
                  <Layout.Content>
                    <WrappedNormalLoginForm />
                  </Layout.Content>
                </>
              );
            }}
          />
          <Route
            path="/register"
            exact
            component={() => {
              return (
                <>
                  <Header />
                  <Layout.Content>
                    <WrappedRegistrationForm />
                  </Layout.Content>
                </>
              );
            }}
          />
          <Route path="/attendance" exact component={AttendancePage} />
          <Route path="/assignments" exact component={AssignmentHome} />
          <Route component={Error404} />
        </Switch>
        <Layout.Footer className={Classes.footer}>
          <Icon type="copyright" theme="twoTone" />
          &nbsp;Axios
        </Layout.Footer>
      </>
    );
  }
}

export default App;
