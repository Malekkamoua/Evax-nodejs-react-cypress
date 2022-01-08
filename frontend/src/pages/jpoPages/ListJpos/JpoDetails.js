import { Button, Popconfirm, Table, Card, Form, Col, Row, Select } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  fetchJpoViewAction,
  update_jpo_object,
  excludeVolunteerFromJpo,
} from "../../../redux/actions/jpoAction";
import { fetchAllVolunteersAction } from "../../../redux/actions/volunteerAction";
import runNotification from "../../../utils/runNotification";
export default function ListJpos() {
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
      title: "volunteer_team",
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
            onConfirm={() =>
              dispatch(
                excludeVolunteerFromJpo(jpo, {
                  _id: jpoObject._id,
                  date: jpoObject.date,
                  center_id: jpoObject.center_id,
                  volunteers_id: jpoObject.volunteers_id.filter(
                    (elem) => elem._id.toString() !== record._id.toString()
                  ),
                })
              )
            }
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();
  const jpo = useSelector((state) => state.jpo.selectedJpo);

  useEffect(() => {
    dispatch(fetchJpoViewAction(jpo));
    dispatch(fetchAllVolunteersAction());
  }, [dispatch, jpo]);

  const [selectedValue, setSelectedValue] = useState("");

  const volunteer = useSelector((state) => state.volunteer.listVolunteer);
  const jpoObject = useSelector((state) => state.jpo.jpoObject);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const ADDVolunteerToJpo = () => {
    if (!selectedValue) {
      runNotification(
        "error",
        "Missing Data",
        "You need to fill the up all the inputs"
      );
    } else {
      dispatch(
        update_jpo_object(jpoObject._id, {
          _id: jpoObject._id,
          date: jpoObject.date,
          center_id: jpoObject.center_id,
          volunteers_id: [
            ...jpoObject.volunteers_id,
            JSON.parse(selectedValue),
          ],
        })
      );
    }
  };

  return (
    <>
      {/* <Link to="/dashboard/listJpos">
        <Button type="primary"> ListJpos</Button>
      </Link> */}
      <Card title="Jpo Details">
        <Row>
          <Col span={8}>
            <Form.Item label=" Jpo Date">
              <div>{jpoObject ? jpoObject.date : ""}</div>
            </Form.Item>
            <Form.Item label="Center Name">
              {" "}
              <div>
                {jpoObject
                  ? jpoObject.center_id
                    ? jpoObject.center_id.name
                    : ""
                  : ""}
              </div>
            </Form.Item>
            <Form.Item label="Volunteers" required>
              <Select
                value={selectedValue}
                onChange={handleChange}
                style={{ width: 200 }}
              >
                {volunteer.map((element) => {
                  return (
                    <Select.Option value={JSON.stringify(element)}>
                      {element.firstName}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Button type="primary" onClick={ADDVolunteerToJpo}>
              {" "}
              Add volunteer
            </Button>
          </Col>
          <Col span={16}>
            <Table
              columns={columns}
              dataSource={jpoObject.volunteers_id}
              bordered
              pagination={{
                defaultPageSize: 3,
                showSizeChanger: true,
                pageSizeOptions: ["3", "6", "9"],
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}
