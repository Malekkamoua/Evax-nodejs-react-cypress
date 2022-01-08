import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ReactGA from "react-ga";
export default function Header() {
  const { t } = useTranslation();

  const handleClick = (lang) => {
    console.log(lang);
    ReactGA.event({
      category: "Button",
      action: "Change language to  " + lang,
    });
    i18next.changeLanguage(lang);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = "";
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      />
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{t("Titre.1")} :)</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              className="mr-5 hover:text-gray-900"
              href="#accueil"
              onClick={() => {
                ReactGA.event({
                  category: "Link",
                  action: "Going to the citizen space",
                });
              }}
            >
              {t("Navigation.1")}
            </a>
            <a className="mr-5 hover:text-gray-900" href="#info">
              {t("Navigation.2")}
            </a>
            <a className="mr-5 hover:text-gray-900" href="#etapes">
              {t("Navigation.3")}
            </a>

            <a className="mr-5 hover:text-gray-900" href="#contact">
              {t("Navigation.4")}
            </a>
          </nav>

          {loggedIn ? (
            <>
              <a
                href="/citoyen/profile"
                className="inline-flex items-center  border-0 py-1 px-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
              >
                Profile
              </a>
              <a
                href="/citoyen/login"
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                onClick={() => localStorage.clear()}
              >
                {t("Navigation.6")}

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </>
          ) : (
            <a
              href="/citoyen/generate-password"
              className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
            >
              {t("Navigation.5")}

              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          )}
        </div>
      </header>
      <div
        style={{
          display: "block",
          width: "100%",
          zIndex: 9999,
          position: "fixed",
          right: "-93%",
          top: "200px",
        }}
      >
        <button
          onClick={() => handleClick("ar")}
          className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Ar
        </button>
        <br />
        <button
          onClick={() => handleClick("en")}
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          En
        </button>
        <br />
        <button
          onClick={() => handleClick("fr")}
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Fr
        </button>
        <br />
      </div>
    </>
  );
}
