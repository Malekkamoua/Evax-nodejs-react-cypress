import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDelayedAppointmentAction,
  reportAppointmentAction,
} from "../../redux/actions/appointmentAction";
export default function ReportAppointment() {
  const appointment = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDelayedAppointmentAction());
  }, [dispatch]);
  console.log(appointment.lengthDelayedAppointment);
  const handleReportAppointment = () => {
    dispatch(reportAppointmentAction());
  };
  return (
    <Card
      title="Number of Citizen with delayed appointment"
      style={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ marginLeft: 65, fontSize: 80, fontFamily: "roboto" }}>
        {appointment.lengthDelayedAppointment}
      </p>

      <Button type="primary" onClick={handleReportAppointment}>
        Report Appointments
      </Button>
    </Card>
  );
}
