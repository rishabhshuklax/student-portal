import React, { Component } from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import Classes from "./Login.module.css";
import { Link } from "react-router-dom";

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={Classes.pagecenter}>
        <Form onSubmit={this.handleSubmit} className={`login-form`}>
          <Form.Item>
            <Icon
              type="user"
              style={{ fontSize: 60, color: "#006691" }}
              fill="#004eb0"
            />
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <div className={Classes.lola}>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className={`login-form-forgot `} href="#g">
                Forgot password
              </a>
              <Link to="/me">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Link>
              <div>
                Or <Link to="/register">register now!</Link>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
