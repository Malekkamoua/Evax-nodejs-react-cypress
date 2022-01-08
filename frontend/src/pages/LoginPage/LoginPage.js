import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import logo from "../../image/image_gif.gif";
import LoginNav from "../../components/LoginNav";
import runNotification from "../../utils/runNotification";

export default function LoginPage() {
  const history = useHistory();

  const onFinish = (values) => {
    let { password, username } = values;
    if (username === "admin" && password === "admin")
      history.push("/dashboard");
    else {
      runNotification("error", "Login Problem", "Wrong username or password");
    }
  };

  return (
    <LoginNav>
      <div className="page">
        <Card bordered hoverable className="card-form">
          <h1 className="login-legend">Login </h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "30vw",
                  marginTop: "5vh",
                  marginLeft: "4vw",
                }}
                className="login-form-button"
              >
                Connexion
              </Button>
              <br />
              <br />
            </Form.Item>
          </Form>
        </Card>
        <img src={logo} alt="login animated" className="image" />
      </div>
    </LoginNav>
  );
}
