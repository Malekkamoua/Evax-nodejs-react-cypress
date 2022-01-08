import { Button, Input, Form, Card } from "antd";
import { useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import runNotification from "../../../utils/runNotification";
import "./style.css";
import { addVaccineAction } from "../../../redux/actions/vaccineAction";

export default function AddVaccine() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    const { label } = values;
    if (!label)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      dispatch(addVaccineAction({ label }));
      history.push("/dashboard/listVaccines");
    }
    form.resetFields();
  };
  return (
    <Card title="Add Vaccine" style={{ width: "100%", height: "900px" }}>
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
        <Form.Item label="Vaccine Label" name="label">
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
            Ajouter Vaccine
          </Button>
        </div>
      </Form>
    </Card>
  );
}
