import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Card, Select } from "antd";
import {
  fetchAppointmentAction,
  validateAppointmentAction,
} from "../../redux/actions/appointmentAction";
import { fetchAllVaccinesAction } from "../../redux/actions/vaccineAction";
import Modal from "antd/lib/modal/Modal";
import Form from "antd/lib/form/Form";
export default function OperatorDashboard() {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);
  const vaccine = useSelector((state) => state.vaccine);
  useEffect(() => {
    dispatch(fetchAppointmentAction());
    dispatch(fetchAllVaccinesAction());
  }, [dispatch]);

  const columns = [
    {
      title: "CitizenName",
      dataIndex: "citizenName",
      key: "citizenName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button success onClick={() => showModal(record._id)}>
            Validate
          </Button>
        </div>
      ),
    },
  ];
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [vaccin, setVaccin] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState("");
  const showModal = (appointment_id) => {
    console.log(appointment_id);
    setSelectedAppointment(appointment_id);
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    dispatch(validateAppointmentAction(selectedAppointment, vaccin));
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleChangeSelect = (value) => {
    console.log(value);
    setVaccin(value);
  };
  return (
    <Card>
      <h1
        style={{
          display: "inline-block",
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: 25,
          letterSpacing: 5,
          borderStyle: "solid ",
          borderWidth: 2,
          backgroundColor: "white",
          marginLeft: "23vw",
          marginBottom: "10vh",
          paddingLeft: "2vh",
          paddingRight: "2vh",
        }}
      >
        List Operator
      </h1>

      <br />

      <Table
        columns={columns}
        dataSource={appointment.appointmentList.map((elem) => {
          return {
            ...elem,
            date: new Date(elem.date).toDateString(),
            citizenName: elem.user_id.name,
          };
        })}
        bordered
        loading={appointment.loading}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: ["3", "6", "9"],
        }}
      />
      <Modal
        width={400}
        bodystyle={{ height: 100 }}
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
          Type de vaccin:
          <Select
            value={vaccin}
            style={{ width: 120, marginLeft: 50 }}
            onChange={handleChangeSelect}
          >
            {vaccine.listVaccine.map((elem) => (
              <Select.Option value={elem._id}>{elem.label}</Select.Option>
            ))}
          </Select>
        </Form>
      </Modal>
    </Card>
  );
}
