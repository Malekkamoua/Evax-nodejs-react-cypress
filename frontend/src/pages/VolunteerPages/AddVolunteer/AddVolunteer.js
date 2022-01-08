import { Button, Select, Input, Form, Card } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import runNotification from "../../../utils/runNotification";
import "./style.css";
import { useDispatch } from "react-redux";
import { addVolunteerAction } from "../../../redux/actions/volunteerAction";
import { useState } from "react";

export default function AddVolunteer() {
  const [form] = Form.useForm();
  const [operator, setOperator] = useState("");
  const [volunteerTeam, setVolunteerTeam] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setOperator(value);
  };
  const handleChangeVolunteer = (value) => {
    setVolunteerTeam(value);
  };
  const onFinish = (values) => {
    const { firstName, lastName, age, phoneNumber, cin } = values;
    if (
      !firstName ||
      !lastName ||
      !age ||
      !phoneNumber ||
      !cin ||
      !operator ||
      !volunteerTeam
    )
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      dispatch(
        addVolunteerAction({
          firstName,
          lastName,
          age,
          phoneNumber,
          cin,
          operator,
          volunteer_team: volunteerTeam,
        })
      );
      history.push("/dashboard/listVolunteers");
    }
    form.resetFields();
  };
  console.log(operator);
  console.log(volunteerTeam);
  return (
    <Card title="Add Volunteer" style={{ width: "100%", height: "900px" }}>
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
        size="large"
      >
        <Form.Item label=" FirstName" name="firstName">
          <Input required />
        </Form.Item>
        <Form.Item label="LastName" name="lastName">
          <Input required />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input required />
        </Form.Item>
        <Form.Item label="PhoneNumber" name="phoneNumber">
          <Input required />
        </Form.Item>
        <Form.Item label="Cin" name="cin">
          <Input required />
        </Form.Item>

        <Form.Item label="Operator" name="operator">
          <Select
            value={operator}
            onChange={handleChange}
            options={[
              {
                value: "true",
                label: "true",
              },
              {
                value: "flase",
                label: "false",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Volunteer Team" name="volunteer_Team">
          <Select
            value={volunteerTeam}
            options={[
              {
                value: "Tunisian Red Crescent",
                label: "Tunisian Red Crescent",
              },
              {
                value: "Tunisian Scouts",
                label: "Tunisian Scouts",
              },
            ]}
            onChange={handleChangeVolunteer}
          />
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
            Add Volunteer
          </Button>
        </div>
      </Form>
    </Card>
  );
}
