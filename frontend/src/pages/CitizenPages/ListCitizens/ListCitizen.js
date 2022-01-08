import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Card } from "antd";

import { fetchAllCitizensAction } from "../../../redux/actions/citizenAction";

export default function ListCitizen() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const dispatch = useDispatch();

  const citizen = useSelector((state) => state.citizen);
  useEffect(() => {
    dispatch(fetchAllCitizensAction());
  }, [dispatch]);

  return (
    <>
      <Card title="List citizen">
        <Table
          columns={columns}
          dataSource={citizen.citizensList.map((elem) => {
            return {
              ...elem,
              name: elem.user ? elem.user.name : "",
              email: elem.user ? elem.user.email : "",
              phone: elem.user ? elem.user.phone : "",
            };
          })}
          bordered
          loading={citizen.loading}
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
