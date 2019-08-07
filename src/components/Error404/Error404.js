import React, { Component } from "react";
import { Result} from "antd";

import StudentPageLayout from "../Student/Layout/StudentPageLayout";
import { Link } from "react-router-dom";

class Error404 extends Component {
  render() {
    return (
      <>
        <StudentPageLayout>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Link to="/login" type="primary">
                Back Home
              </Link>
            }
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff"
            }}
          />
        </StudentPageLayout>
      </>
    );
  }
}

export default Error404;
