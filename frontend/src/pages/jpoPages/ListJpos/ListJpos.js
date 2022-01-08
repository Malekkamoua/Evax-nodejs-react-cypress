import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Popconfirm, Table, Card } from "antd";

import {
  fetchAllJposAction,
  deleteJpoAction,
  viewJpo,
} from "../../../redux/actions/jpoAction";

import "./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ListJpos() {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "CenterName",
      dataIndex: "centerName",
      key: "centerName",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => dispatch(deleteJpoAction(record._id))}
          >
            <Button danger>Delete</Button>
          </Popconfirm>

          <Link to="/Dashboard/JpoDetails">
            <Button type="primary" onClick={() => handleView(record._id)}>
              {" "}
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];
  const handleView = (id) => {
    dispatch(viewJpo(id));
  };

  const dispatch = useDispatch();

  const jpo = useSelector((state) => state.jpo);
  useEffect(() => {
    dispatch(fetchAllJposAction());
  }, [dispatch]);

  return (
    <>
      <Card title="List jpos">
        <Table
          columns={columns}
          dataSource={jpo.listJpo.map((elem) => {
            return {
              ...elem,
              centerName: elem.center_id ? elem.center_id.name : "",
            };
          })}
          bordered
          loading={jpo.loading}
          pagination={{
            defaultPageSize: 3,
            showSizeChanger: true,
            pageSizeOptions: ["3", "6", "9"],
          }}
        />
      </Card>

      <br />
    </>
  );
}
