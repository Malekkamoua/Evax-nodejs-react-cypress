import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Popconfirm,
  Table,
  Card,
  Modal,
  Form,
  Input,
  Cascader,
  DatePicker,
} from "antd";

import {
  fetchAllCentersAction,
  deleteCenterAction,
  updateCenterAction,
} from "../../../redux/actions/centerAction";

import "./style.css";
import { addJpoAction } from "../../../redux/actions/jpoAction";
import runNotification from "../../../utils/runNotification";

export default function ListCenters() {
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
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deleteCenterAction(record._id))}
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
          <Button
            type="primary"
            onClick={() => {
              addModal(record);
              showModalAdd(record._id);
            }}
          >
            Add Jpo
          </Button>
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const center = useSelector((state) => state.center);

  useEffect(() => {
    dispatch(fetchAllCentersAction());
  }, [dispatch]);

  const showDataModal = ({ _id, name, address }) => {
    setUpdatedName(name);
    setId(_id);
    setUpdatedAddress(address.split("/"));
  };
  const addModal = ({ date, center_id }) => {
    setUpdatedDate(date);
    setId(center_id);
  };

  const [visible, setVisible] = React.useState(false);
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [updatedName, setUpdatedName] = React.useState("");
  const [updatedAddress, setUpdatedAddress] = React.useState([]);
  const [updatedDate, setUpdatedDate] = React.useState([]);
  const [id, setId] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const showModalAdd = (id) => {
    setId(id);
    setVisibleAdd(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    dispatch(
      updateCenterAction(id, {
        name: updatedName,
        address: updatedAddress.join(" "),
      })
    );
    setVisible(false);
    setConfirmLoading(false);
    setUpdatedAddress("");
  };
  const handleAddOk = async () => {
    setConfirmLoading(true);
    if (!updatedDate) {
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    } else {
      dispatch(
        addJpoAction({
          date: updatedDate,
          center_id: id,
        })
      );
      setVisible(false);
      setConfirmLoading(false);
      history.push("/dashboard/listJpos");
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleCancelAdd = () => {
    setVisibleAdd(false);
  };
  const handleChange = (value) => {
    setUpdatedDate(value);
  };

  return (
    <>
      <Card title="List centers">
        <Table
          columns={columns}
          dataSource={center.centersList}
          bordered
          loading={center.loading}
          pagination={{
            defaultPageSize: 3,
            showSizeChanger: true,
            pageSizeOptions: ["3", "6", "9"],
          }}
        />
        <Modal
          width="50vw"
          centered
          title="Update Center"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {" "}
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
            <Form.Item label="Center Name" name="name">
              <Input
                required
                defaultValue={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
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
        <Modal
          width="50vw"
          centered
          title="Add Jpo"
          visible={visibleAdd}
          onOk={handleAddOk}
          onCancel={handleCancelAdd}
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
            <Form.Item label="date" name="date" required>
              <DatePicker value={updatedDate} onChange={handleChange} />
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

      <br />
    </>
  );
}
