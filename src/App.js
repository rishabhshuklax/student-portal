import React, { Component } from "react";
import { Icon, Layout, Typography } from "antd";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import StudentHome from "./components/Student/Home/StudentHome";
import WrappedNormalLoginForm from "./components/Login/Login";
import AttendancePage from "./components/Student/AttendancePage/AttendancePage";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Classes from "./index.module.css";
// import "../node_modules/materialize-css/dist/css/materialize.min.css";
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
                  <Layout.Header className={Classes.header}>
                    <Typography.Title
                      level={1}
                      style={{ color: "white", fontWeight: "normal" }}
                    >
                      Axios Portal
                    </Typography.Title>
                  </Layout.Header>
                  <Layout.Content>
                    <WrappedNormalLoginForm />
                  </Layout.Content>
                </>
              );
            }}
          />
          <Route path="/attendance" exact component={AttendancePage} />
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
