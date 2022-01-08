import { Button, Input, Form, Card } from "antd";
import { useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import runNotification from "../../../utils/runNotification";
import "./style.css";
import { addOperator } from "../../../redux/actions/operatorAction";

export default function AddOperator() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    const { name, email, password, phone, address } = values;
    if (!name || !password || !phone || !email || !address)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      dispatch(addOperator({ name, password, phone, email, address }));
      history.push("/dashboard/listOperators");
    }
    form.resetFields();
  };
  return (
    <Card title="Add Operator" style={{ width: "100%", height: "900px" }}>
      <Form
        form={form}
        onFinish={(values) => {
          onFinish(values);
        }}
        style={{ height: "20vh", width: "50vw" }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        // onValuesChange={onFormLayoutChange}
        size="large"
      >
        <Form.Item label="Operator Name" name="name">
          <Input required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input required type="password" />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input required />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input required />
        </Form.Item>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ position: "relative", left: "-23%", top: " 17px" }}
            type="primary"
            htmlType="submit"
          >
            Ajouter Operator
          </Button>
        </div>
      </Form>
    </Card>
  );
}
