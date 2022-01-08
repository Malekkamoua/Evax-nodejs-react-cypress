import React from "react";
import "./login_style.css";
import { Avatar } from "antd";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import runNotification from "../../../utils/runNotification";
import { UserOutlined } from "@ant-design/icons";
import { loginAction } from "../../../redux/actions/authAction";
import ReactGA from "react-ga";

export default function LoginPageFront() {
  const [form] = Form.useForm();
  const history = useHistory();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onFinish = (values) => {
    console.log("clicked");

    const { email, password } = values;

    if (!email || !password)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      auth.error = "";
      dispatch(loginAction({ email, password }));
    }
    form.resetFields();
  };

  if (auth.error) {
    runNotification("error", "Error", "Wrong email or password");
  } else {
    setTimeout(() => {
      if (auth.user?.userInformation) {
        const info = auth.user.userInformation;
        if (info.role === "admin") {
          history.push("/dashboard");
        } else if (info.role === "operator") {
          history.push("/dashboard");
        } else {
          history.push("/citoyen/profile");
        }
      }
    }, 100);
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  console.log(auth.loading);
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="inactive underlineHover">
          <a href="/citoyen/generate-password">MDP</a>
        </h2>
        <h2 className="active">
          <a href="/citoyen/login">Connexion</a>
        </h2>
        <h2 className="inactive underlineHover">
          <a href="/citoyen/insription">Inscription</a>
        </h2>{" "}
        <br />
        <br />
        <div className="fadeIn first">
          <Avatar icon={<UserOutlined />} />
        </div>
        <br />
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="email">
            <Input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Votre mail"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Mot de passe"
            />
          </Form.Item>
          {!auth.loading ? (
            <Input
              type="submit"
              value="Connexion"
              className="fadeIn fourth"
              onClick={() => {
                ReactGA.event({
                  category: "Submit",
                  action: "Try to login in to the account ",
                });
              }}
            />
          ) : (
            <Spin indicator={antIcon} />
          )}
        </Form>
      </div>
    </div>
  );
}
