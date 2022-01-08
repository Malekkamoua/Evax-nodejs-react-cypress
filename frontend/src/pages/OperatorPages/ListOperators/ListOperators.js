import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Popconfirm, Table, Card, Modal, Form, Input } from "antd";

import "./style.css";

import {
  fetchAllOperators,
  deleteOperator,
  updateOperator,
} from "../../../redux/actions/operatorAction";
export default function ListOperators() {
  const dispatch = useDispatch();
  const operator = useSelector((state) => state.operator);
  useEffect(() => {
    dispatch(fetchAllOperators());
  }, [dispatch]);
  const showDataModal = ({
    operator_id,
    name,
    password,
    phone,
    email,
    address,
  }) => {
    setUpdatedName(name);
    setUpdatedPassword(password);
    setUpdatedPhone(phone);
    setUpdatedEmail(email);
    setUpdatedAddress(address);
    setId(operator_id);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              console.log(record.operator_id);
              dispatch(deleteOperator(record.operator_id));
            }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button
            type="primary"
            onClick={() => {
              showDataModal(record);
              showModal();
            }}
          >
            Update
          </Button>
        </div>
      ),
    },
  ];
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [updatedName, setUpdatedName] = React.useState("");
  const [updatedPassword, setUpdatedPassword] = React.useState("");
  const [updatedPhone, setUpdatedPhone] = React.useState("");
  const [updatedEmail, setUpdatedEmail] = React.useState("");
  const [updatedAddress, setUpdatedAddress] = React.useState("");
  const [id, setId] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    dispatch(
      updateOperator(id, {
        name: updatedName,
        password: updatedPassword,
        phone: updatedPhone,
        email: updatedEmail,
        address: updatedAddress,
      })
    );
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title=" List Operators">
      <br />

      <Table
        columns={columns}
        dataSource={operator.listOperator.map((elem) => {
          return { ...elem.user_id, operator_id: elem._id };
        })}
        bordered
        loading={operator.loading}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "6", "9"],
        }}
      />
      <Modal
        width="50vw"
        bodystyle={{ height: 500 }}
        centered
        title="Update Operator"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          style={{ height: "35vh", width: "55vw" }}
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
          <Form.Item label="Operator Name" name="name">
            <Input
              required
              defaultValue={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input
              required
              defaultValue={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              required
              defaultValue={updatedPassword}
              onChange={(e) => setUpdatedPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input
              required
              defaultValue={updatedPhone}
              onChange={(e) => setUpdatedPhone(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input
              required
              defaultValue={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
        </Form>
      </Modal>
    </Card>
  );
}
