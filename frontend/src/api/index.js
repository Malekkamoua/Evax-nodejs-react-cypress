const axios = require("axios").default;
const instance = axios.create({
  baseURL: "https://evax-backend.herokuapp.com/",

  timeout: 20000,
  headers: { "X-Custom-Header": "foobar" },
});
module.exports = instance;
