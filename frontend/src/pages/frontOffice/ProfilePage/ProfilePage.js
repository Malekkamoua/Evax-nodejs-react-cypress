import React, { useEffect, useState } from "react";
import Header from "../../../components/Frontoffice/Header/Header";

import { Card, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCitizenAction,
  bookAppointmentAction,
} from "../../../redux/actions/citizenAction";
import { fetchAllCentersAction } from "../../../redux/actions/centerAction";
import runNotification from "../../../utils/runNotification";
import ReportVaccin from "../../../components/ReportVaccin/ReportVaccin";
import PrintReport from "../../../components/PrintReport/PrintReport";

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCitizenAction(user.citizen_id));
  }, [dispatch, user.citizen_id]);

  const citizen = useSelector((state) => state.citizen);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Option, OptGroup } = Select;

  const centers = useSelector((state) => state.center).centersList;

  const [center, setCenter] = useState();
  function handleChange(value) {
    setCenter(value);
  }
  const showModal = () => {
    setIsModalVisible(true);
    dispatch(fetchAllCentersAction());
  };

  const handleOk = () => {
    if (center === undefined) {
      runNotification(
        "error",
        "Pas de rendez-vous",
        "Vous devrez choisir un centre"
      );
      return;
    }

    const user_id = user.userInformation._id;
    const center_id = center;

    let date = new Date().toLocaleString().slice(0, 10).split("/");
    date = date[2] + "-" + date[1] + "-" + date[0];
    const date_suggestion = date.toString();

    dispatch(bookAppointmentAction({ center_id, date_suggestion, user_id }));
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (citizen.error)
      runNotification("error", "Pas de rendez-vous", citizen.error);
  }, [citizen.loading_appointment, citizen.error]);

  useEffect(() => {
    if (citizen.error)
      runNotification(
        "success",
        "Rendez-vous",
        "Vous venez de recevoir la date et l'horaire de votre rendez-vous via mail. Veuillez verifier votre courriel"
      );
  }, [citizen.message, citizen.error]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      />

      <section>
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div>
            <button
              style={{ float: "right" }}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={showModal}
            >
              Prendre un rendez-vous
            </button>
            <br />
            <br />
            <br />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Mon profile: {user.userInformation.name}
            </h1>
            <p
              className="mb-8 leading-relaxed text-justify"
              style={{ fontSize: "15px" }}
            >
              Cette page est votre profil. <br></br> Vous trouverez ci-joint
              toutes vos coordonnées et rapport de vaccination. Vous pouvez
              mettre à jour votre profile et imprimer vos rapports.
            </p>
            <div>
              <div>
                <div style={{ margin: "4%" }}>
                  <h5 className="title-font sm:text-2xl  mb-2  text-gray-900">
                    Information générale
                  </h5>
                  <Card style={{ width: "100%", fontSize: "16px" }}>
                    <b>Nom</b>: {user.userInformation.name} <br />
                    <br />
                    <b>Adresse mail</b> : {user.userInformation.email}
                    <br />
                    <br />
                    <b>Téléphone</b>: {user.userInformation.phone}
                    <br />
                    <br />
                  </Card>
                </div>
                <div style={{ margin: "4%" }}>
                  <h5 className="title-font sm:text-2xl  mb-2  text-gray-900">
                    Mon historique de vaccination
                  </h5>
                  <br></br>
                  <Card style={{ width: "100%" }}>
                    <ReportVaccin />
                  </Card>
                </div>
              </div>
            </div>
            <div style={{ float: "right", display: "inline-block" }}>
              <PrintReport />
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Prise de rendez-vous"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Veuillez choisir le centre qui vous convient</p>
        <OptGroup>
          <Option></Option>
          ))
        </OptGroup>
        <Select style={{ width: 200 }} onChange={handleChange}>
          <OptGroup>
            {centers.map((center) => (
              <Option value={center._id} key={center._id}>
                {center.name}
              </Option>
            ))}
          </OptGroup>
        </Select>
      </Modal>
    </>
  );
}
