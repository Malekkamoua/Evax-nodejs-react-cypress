import { Button, Cascader, Input, Form, Card } from "antd";
import { useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import runNotification from "../../../utils/runNotification";
import "./style.css";
import { addPharmacyAction } from "../../../redux/actions/pharmacyAction";

export default function AddPharmacy() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    const { name, owner, address } = values;
    if (!name || !owner || !address)
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    else {
      const stringAddress = address.join(" ");
      dispatch(addPharmacyAction({ name, owner, address: stringAddress }));
      history.push("/dashboard/listPharmacies");
    }
    form.resetFields();
  };
  return (
    <Card title="Add Pharmacy" style={{ width: "100%", height: "900px" }}>
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
        <Form.Item label="Pharmacy Name" name="name">
          <Input required />
        </Form.Item>
        <Form.Item label="Owner" name="owner">
          <Input required />
        </Form.Item>

        <Form.Item label="Address" name="address">
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
            Ajouter Pharmacy
          </Button>
        </div>
      </Form>
    </Card>
  );
}
