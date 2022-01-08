import React from "react";
import logo from "./images/img1.jpg";
import { Steps } from "antd";
import { useTranslation } from "react-i18next";
import Header from "../../../components/Frontoffice/Header/Header";
import submitContact from "../../../services/contact";
import runNotification from "../../../utils/runNotification";

const { Step } = Steps;

export default function HomePage() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitHandler = () => {
    if (email === "" || message === "") {
      runNotification("error", t("Notif.2"), t("Notif.1"));
    } else {
      submitContact(email, message);
      setEmail("");
      setMessage("");
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      />
      <Header />
      <section className="text-gray-700 body-font" id="accueil">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {t("Pourquoi.1")}
            </h1>
            <p
              className="mb-8 leading-relaxed text-justify"
              style={{ fontSize: "18px" }}
            >
              {t("Pourquoi.2")}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={logo}
            />
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 body-font border-t border-gray-200"
        id="info"
      >
        <h3
          className="title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800"
          style={{ marginLeft: "2%" }}
        >
          {t("Informations.1")}
        </h3>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>
          <div className="flex flex-wrap -m-6">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.2")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.3")}
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.4")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.5")}
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.6")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.7")}
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.8")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.9")}
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.10")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.11")}
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {t("Informations.12")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("Informations.13")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <h3
          className="title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800"
          style={{ marginLeft: "2%" }}
        >
          {t("Etapes.1")}
        </h3>
        <div className="container px-5 py-24 mx-auto ml-4 mr-4" id="etapes">
          <Steps current={0}>
            <Step title={t("Etapes.2")} description={t("Etapes.3")} />
            <Step title={t("Etapes.4")} description={t("Etapes.5")} />
            <Step title={t("Etapes.6")} description={t("Etapes.7")} />
            <Step title={t("Etapes.8")} description={t("Etapes.9")} />
          </Steps>
        </div>
      </section>
      <section
        className="text-gray-700 body-font border-t border-gray-200"
        id="info"
      >
        <h3
          className="title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800"
          style={{ marginLeft: "2%" }}
        >
          {t("Contact.1")}
        </h3>{" "}
        <br></br>
      </section>
      <section className="text-gray-700 body-font relative" id="contact">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=tunis+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {t("Contact.1")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("Contact.2")}
            </p>

            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder={t("Form.1")}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder={t("Form.2")}
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            ></textarea>

            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={submitHandler}
            >
              {t("Contact.3")}
            </button>
            <p className="text-xs text-gray-500 mt-3">{t("Contact.4")}</p>
          </div>
        </div>
      </section>
      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 React —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Ninja Turtles
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              {t("Footer.1")}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
