import React from "react";
import "./reg_style.css";
import { Avatar } from "antd";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import runNotification from "../../../utils/runNotification";
import { registerAction } from "../../../redux/actions/authAction";
import ReactGA from "react-ga";

export default function RegistrationPage() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onFinish = (values) => {
    console.log("clicked");

    const { email, name, phone, address } = values;

    if (!email || !name || !phone || !address)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      auth.error = "";
      let registry_mode = true;
      dispatch(registerAction({ email, name, phone, address, registry_mode }));
    }
    form.resetFields();
  };
  if (auth?.error) {
    runNotification("error", "Error", "Email already exists");
  } else {
    if (auth?.message) {
      console.log(auth);
      history.push("/citoyen/generate-password");
    }
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="inactive underlineHover">
          <a href="/citoyen/generate-password">MDP</a>
        </h2>
        <h2 className="inactive underlineHover">
          <a href="/citoyen/login">Connexion</a>
        </h2>
        <h2 className="active">
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
              placeholder="Votre mail (eg: email@gmail.com)"
            />
          </Form.Item>
          <Form.Item name="name">
            <Input
              type="text"
              id="name"
              className="fadeIn second"
              name="name"
              placeholder="Votre nom"
            />
          </Form.Item>
          <Form.Item name="address">
            <Input
              type="text"
              id="address"
              className="fadeIn second"
              name="address"
              placeholder="Votre adresse (eg: Tunis 12 Rue Tunis)"
            />
          </Form.Item>
          <Form.Item name="phone">
            <Input
              type="text"
              id="phone"
              className="fadeIn second"
              name="phone"
              placeholder="Votre numéro de telephone (eg: 71 458 965)"
            />
          </Form.Item>

          <br />
          {!auth.loading ? (
            <Input
              type="submit"
              className="fadeIn fourth"
              value="Inscription"
              onClick={() => {
                ReactGA.event({
                  category: "Submit",
                  action: "Trying to create an account ",
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
