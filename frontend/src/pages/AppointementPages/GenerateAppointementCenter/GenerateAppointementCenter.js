import { Button, Card, Form, DatePicker, Col, Row, Select } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { generateAppointementAction } from "../../../redux/actions/appointmentAction";
import { fetchAllCentersAction } from "../../../redux/actions/centerAction";
import runNotification from "../../../utils/runNotification";

export default function GenerateAppointementCenter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCentersAction());
  }, [dispatch]);

  const [selectedValue, setSelectedValue] = useState("");

  const center = useSelector((state) => state.center.centersList);
  const [updateDateDebut, setUpdateDateDebut] = useState("");
  const [updateDateFin, setUpdateDateFin] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const handleChangeDate = (value) => {
    setUpdateDateDebut(value);
    setUpdateDateFin(value);
  };

  const GenerateAppointementCenter = () => {
    if (!selectedValue || updateDateFin || updateDateDebut) {
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    } else {
      dispatch(
        generateAppointementAction({
          center_id: selectedValue,
          date_debut: updateDateFin.toString(),
          date_fin: updateDateDebut.toString(),
        })
      );
    }
  };

  return (
    <>
      <Card title="Generate Appointement">
        <Row>
          <Col span={16}>
            <Form.Item label="Center Name" required>
              <div>
                <Select
                  value={selectedValue}
                  onChange={handleChange}
                  style={{ width: 200 }}
                >
                  {center.map((element) => {
                    return (
                      <Select.Option value={element._id}>
                        {element.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>
            </Form.Item>
            <Form.Item label="Date Debut" required>
              <DatePicker
                value={updateDateDebut}
                onChange={handleChangeDate}
                style={{ width: 210 }}
              />
            </Form.Item>

            <Form.Item label="Date Fin" required>
              <DatePicker
                value={updateDateFin}
                onChange={handleChangeDate}
                style={{ width: 230 }}
              />
            </Form.Item>

            <Button type="primary" onClick={GenerateAppointementCenter}>
              {" "}
              Generate
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
