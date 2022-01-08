import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Popconfirm, Table, Card, Modal, Form, Input } from "antd";

import "./style.css";

import {
  deleteVaccineAction,
  fetchAllVaccinesAction,
  updateVaccineAction,
} from "../../../redux/actions/vaccineAction";
export default function ListVaccines() {
  const dispatch = useDispatch();
  const vaccine = useSelector((state) => state.vaccine);
  useEffect(() => {
    dispatch(fetchAllVaccinesAction());
  }, [dispatch]);
  // function to show the data on the modal
  const showDataModal = ({ _id, label }) => {
    setUpdatedLabel(label);
    setId(_id);
  };
  // Structure of the Table
  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deleteVaccineAction(record._id))}
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
  //Modal Methods:
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [updatedLabel, setUpdatedLabel] = React.useState("");
  const [id, setId] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    dispatch(
      updateVaccineAction(id, {
        label: updatedLabel,
      })
    );
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title="List vaccines">
      <br />

      <Table
        columns={columns}
        dataSource={vaccine.listVaccine}
        bordered
        loading={vaccine.loading}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "6", "9"],
        }}
      />
      <Modal
        width="50vw"
        centered
        title="Update Vacccine"
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
          // onValuesChange={onFormLayoutChange}
          size="large"
        >
          <Form.Item label="Vaccine Label" name="label">
            <Input
              required
              defaultValue={updatedLabel}
              onChange={(e) => setUpdatedLabel(e.target.value)}
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
