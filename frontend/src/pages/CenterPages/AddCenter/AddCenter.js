import React from "react";

import { Button, Cascader, Input, Form, Card } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import runNotification from "../../../utils/runNotification";
import { addCenterAction } from "../../../redux/actions/centerAction";

export default function AddCenter() {
  const [form] = Form.useForm();
  const history = useHistory();

  const dispatch = useDispatch();
  const onFinish = (values) => {
    const { name, address } = values;

    if (!name || !address)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      const stringAddress = address.join(" ");
      dispatch(addCenterAction({ name, address: stringAddress }));
      history.push("/dashboard/listCenters");
    }
    form.resetFields();
  };
  return (
    <>
      <Card title="Add center">
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
          <Form.Item label="Center Name" name="name">
            <Input required />
          </Form.Item>
          <Form.Item label="Cascader" name="address">
            <Cascader
              options={[
                {
                  value: "Ariana",
                  label: "Ariana",
                  children: [
                    {
                      value: "Grande Ariana",
                      label: "Grande Ariana",
                    },
                    {
                      value: "Petite Ariana :D",
                      label: "Petite Ariana :D",
                    },
                    {
                      value: "Sokra",
                      label: "Sokra",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>{" "}
          <div>
            <Button style={{ float: "left" }} type="primary" htmlType="submit">
              Add center
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
