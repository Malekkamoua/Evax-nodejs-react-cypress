import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportAction } from "../../redux/actions/citizenAction";
import { QRCode } from "react-qr-svg";

const ReportVaccin = React.forwardRef((props, ref) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const reports = useSelector((state) => state.citizen).message.data;
  console.log(reports);

  useEffect(() => {
    dispatch(getReportAction(user.citizen_id));
    console.log(reports);
  }, [dispatch]);

  return (
    <div style={{ fontSize: "15px" }} ref={ref}>
      {reports
        ? reports.map((r) => (
            <>
              {" "}
              <div style={{ display: "flex" }}>
                <b style={{ marginRight: "10%" }}>Centre de vaccination</b>
                <p>{r.appointment_id.center_id.name}</p> <br />
              </div>{" "}
              <br />
              <div style={{ display: "flex" }}>
                <b style={{ marginRight: "11%" }}>Horaire rendez-vous</b>
                <p style={{ marginRight: "3%" }}>
                  Date: {r.appointment_id.date.substring(0, 10)}
                </p>{" "}
                <br />
                <p>Heure: {r.appointment_id.time.substring(0, 5)}</p> <br />
              </div>{" "}
              <br />
              <div style={{ display: "flex" }}>
                <b style={{ marginRight: "18%" }}>Vaccin reçu</b>
                <p>{r.vaccin_id.label}</p> <br />
              </div>{" "}
              <br />
              <hr />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  left: "40%",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    left: "14px",
                  }}
                >
                  Scanner ici
                </b>
                <QRCode
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  level="Q"
                  style={{ width: 100 }}
                  value="Citoyen vacciné :)"
                />
              </div>
            </>
          ))
        : "Nothing to show"}
    </div>
  );
});

export default ReportVaccin;
