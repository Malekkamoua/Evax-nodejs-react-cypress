import React, { useEffect } from "react";
import "./login_style.css";
import { Avatar } from "antd";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import runNotification from "../../../utils/runNotification";
import { UserOutlined } from "@ant-design/icons";
import { generatePasswordAction } from "../../../redux/actions/authAction";
import ReactGA from "react-ga";

export default function GeneratePassword() {
  const [form] = Form.useForm();
  const history = useHistory();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const onFinish = (values) => {
    console.log("clicked");

    const { email } = values;

    if (!email)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      auth.error = "";
      dispatch(generatePasswordAction({ email }));
    }
    form.resetFields();
  };

  useEffect(() => {
    if (auth.error) runNotification("error", "Error", "Wrong email");
  }, [auth.error]);

  useEffect(() => {
    console.log(auth);
    if (auth.message_pass) {
      runNotification("success", "success", "Password generated");
      setTimeout(() => {
        history.push("/citoyen/login");
      }, 3000);
    }
  }, [auth.message_pass, auth, history]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active">
          <a href="/citoyen/generate-password">MDP</a>
        </h2>
        <h2 className="inactive underlineHover">
          <a href="/citoyen/login">Connexion</a>
        </h2>
        <h2 className="inactive underlineHover">
          <a href="/citoyen/insription">Inscription</a>
        </h2>
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

          {!auth.loading ? (
            <Input
              type="submit"
              className="fadeIn fourth"
              value="Connexion"
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
