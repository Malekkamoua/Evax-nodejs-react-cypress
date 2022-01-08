import React, { useEffect } from "react";
import "chart.js/auto";
import { Chart, Doughnut, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getStatsAction } from "../../../redux/actions/statAction";
import { Card } from "antd";

export default function StatsPage() {
  const stats = useSelector((state) => state.stats)?.stats;
  console.log(stats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatsAction());
  }, [dispatch]);

  const gridStyle = {
    width: "33%",
    textAlign: "center",
  };

  let teams = [];
  let num = [];
  const volunteers = stats?.volunteers_by_association;
  volunteers?.forEach((vol) => {
    teams.push(vol._id);
    num.push(vol.sum);
  });
  const data_volunteers = {
    labels: teams,
    datasets: [
      {
        label: "Volunteers' teams distribution",
        backgroundColor: "rgba(117, 130, 230,0.2)",
        borderColor: "rgba(117, 130, 230,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(117, 130, 230,0.4)",
        hoverBorderColor: "rgba(117, 130, 230,1)",
        data: num,
      },
    ],
  };

  let centers_id = [];
  let count = [];
  const centers = stats?.appointments_per_center;
  centers?.forEach((vol) => {
    centers_id.push(vol._id);
    count.push(vol.Appointments);
  });
  const data_centers = {
    labels: centers_id,
    datasets: [
      {
        label: "Appointments per center distribution",
        backgroundColor: "rgba(117, 130, 230,0.2)",
        borderColor: "rgba(117, 130, 230,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(117, 130, 230,0.4)",
        hoverBorderColor: "rgba(117, 130, 230,1)",
        data: count,
      },
    ],
  };

  let vacc_centers_id = [];
  let all_vacc = [];
  const vacc_centers = stats?.vaccinated_citizens_by_center;
  vacc_centers?.forEach((vol) => {
    vacc_centers_id.push(vol._id);
    all_vacc.push(vol.Vaccinated);
  });
  const data_vacc_centers = {
    labels: vacc_centers_id,
    datasets: [
      {
        label: "Done vaccines per center distribution",
        backgroundColor: "rgba(117, 130, 230,0.2)",
        borderColor: "rgba(117, 130, 230,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(117, 130, 230,0.4)",
        hoverBorderColor: "rgba(117, 130, 230,1)",
        data: all_vacc,
      },
    ],
  };

  return (
    <div>
      <Card title="Numbers">
        <Card.Grid style={gridStyle}>
          Registred citizens <b>{stats?.all_citizens}</b>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Booked appointments <b>{stats?.all_appointments_with_users}</b>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Operators <b>{stats?.all_operators}</b>
        </Card.Grid>
      </Card>
      <Bar data={data_volunteers} width={100} height={50} /> <br />
      <Bar data={data_centers} width={100} height={50} /> <br />
      <Bar data={data_vacc_centers} width={100} height={50} />
    </div>
  );
}
