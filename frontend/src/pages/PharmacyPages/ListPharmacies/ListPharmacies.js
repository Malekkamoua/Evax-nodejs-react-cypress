import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Popconfirm,
  Table,
  Card,
  Modal,
  Form,
  Input,
  Cascader,
} from "antd";

import "./style.css";

import {
  deletePharmacyAction,
  fetchAllPharmaciesAction,
  updatePharmacyAction,
} from "../../../redux/actions/pharmacyAction";
export default function ListPharmacies() {
  const dispatch = useDispatch();
  const pharmacy = useSelector((state) => state.pharmacy);
  useEffect(() => {
    dispatch(fetchAllPharmaciesAction());
  }, [dispatch]);
  // function to show the data on the modal
  const showDataModal = ({ _id, name, owner, address }) => {
    setUpdatedName(name);
    setUpdatedOwner(owner);
    setId(_id);
    setUpdatedAddress(address.split("/"));
  };
  // Structure of the Table
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
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deletePharmacyAction(record._id))}
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
  const [updatedName, setUpdatedName] = React.useState("");
  const [updatedOwner, setUpdatedOwner] = React.useState("");
  const [updatedAddress, setUpdatedAddress] = React.useState([]);
  const [id, setId] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    dispatch(
      updatePharmacyAction(id, {
        name: updatedName,
        owner: updatedOwner,
        address: updatedAddress.join(" "),
      })
    );
    setVisible(false);
    setConfirmLoading(false);
    setUpdatedAddress("");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title="List phamacies">
      <br />

      <Table
        columns={columns}
        dataSource={pharmacy.listPharmacy}
        bordered
        loading={pharmacy.loading}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "6", "9"],
        }}
      />
      <Modal
        width="50vw"
        centered
        title="Update Pharmacy"
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
          <Form.Item label="Pharmacy Name" name="name">
            <Input
              required
              defaultValue={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Owner" name="owner">
            <Input
              required
              defaultValue={updatedOwner}
              onChange={(e) => setUpdatedOwner(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Cascader" name="address">
            <Cascader
              defaultValue={updatedAddress}
              onChange={(e) => setUpdatedAddress(e)}
              options={[
                {
                  value: "ariana",
                  label: "Ariana",
                  children: [
                    {
                      value: "grande ariana",
                      label: "Grande Ariana",
                    },
                    {
                      value: "petite ariana",
                      label: "Petite Ariana :D",
                    },
                    {
                      value: "sokra",
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
          ></div>
        </Form>
      </Modal>
    </Card>
  );
}
