import React, { useEffect, useState } from "react";
import {
  Button,
  Popconfirm,
  Table,
  Card,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import {
  deleteVolunteerAction,
  fetchAllVolunteersAction,
  updateVolunteerAction,
} from "../../../redux/actions/volunteerAction";
// import {
//   deleteVolunteer,
//   getAllVolunteer,
//   updateVolunteer,
// } from "../../../services/volunteer.service";
export default function ListVolunteers() {
  const dispatch = useDispatch();
  const volunteer = useSelector((state) => state.volunteer);
  // const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    dispatch(fetchAllVolunteersAction());
  }, [dispatch]);

  // function to show the data on the modal
  const showDataModal = ({
    _id,
    firstName,
    lastName,
    age,
    phoneNumber,
    cin,
    operator,
    volunteer_team,
  }) => {
    console.log(firstName);
    console.log(operator);
    setUpdatedFirstName(firstName);
    setUpdatedLastName(lastName);
    setUpdatedAge(age);
    setUpdatedPhoneNumber(phoneNumber);
    setUpdatedCin(cin);
    setUpdatedOperator(operator);
    setUpdatedVolunteerTeam(volunteer_team);
    setId(_id);
  };
  // Structure of the Table
  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Cin",
      dataIndex: "cin",
      key: "cin",
    },

    {
      title: "Volunteer_team",
      dataIndex: "volunteer_team",
      key: "volunteer_team",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deleteVolunteerAction(record._id))}
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
  const [updatedFirstName, setUpdatedFirstName] = React.useState("");
  const [updatedLastName, setUpdatedLastName] = React.useState("");
  const [updatedCin, setUpdatedCin] = React.useState("");
  const [updatedAge, setUpdatedAge] = React.useState("");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = React.useState("");
  const [updatedOperator, setUpdatedOperator] = React.useState("");
  const [updatedVolunteerTeam, setUpdatedVolunteerTeam] = React.useState("");
  const [id, setId] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    dispatch(
      updateVolunteerAction(id, {
        firstName: updatedFirstName,
        lastName: updatedLastName,
        age: updatedAge,
        phoneNumber: updatedPhoneNumber,
        cin: updatedCin,
        operator: updatedOperator,
        volunteer_team: updatedVolunteerTeam,
      })
    );
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title="List Volunteers">
      <br />

      <Table
        columns={columns}
        dataSource={volunteer.listVolunteer}
        bordered
        loading={volunteer.loading}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "6", "9"],
        }}
      />
      <Modal
        width="50vw"
        centered
        title="Update Volunteer"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
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
            <Input
              required
              defaultValue={updatedFirstName}
              onChange={(e) => setUpdatedFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="LastName" name="lastName">
            <Input
              required
              defaultValue={updatedLastName}
              onChange={(e) => setUpdatedLastName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input
              required
              defaultValue={updatedAge}
              onChange={(e) => setUpdatedAge(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="PhoneNumber" name="phoneNumber">
            <Input
              required
              defaultValue={updatedPhoneNumber}
              onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Cin" name="cin">
            <Input
              required
              defaultValue={updatedCin}
              onChange={(e) => setUpdatedCin(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Operator" name="operator">
            <Select
              defaultValue={updatedOperator}
              onChange={(e) => setUpdatedOperator(e)}
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
              defaultValue={updatedVolunteerTeam}
              onChange={(e) => setUpdatedVolunteerTeam(e)}
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
