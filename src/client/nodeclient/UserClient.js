var promise = require("es6-promise");
var axios = require('axios');
var Auth = require('../utils/Auth');
var resourceUrl = "http://localhost:7777";
var register = "/auth/signup";
var login = "/auth/login";
//register post with all data
//login get with email or user and password
module.exports = {
  register: function(userDatas) {
    const userName = encodeURIComponent(userDatas.userName);
    const email = encodeURIComponent(userDatas.email);
    const password = encodeURIComponent(userDatas.password);
    const formData = `name=${userName}&email=${email}&password=${password}`;
    alert(formData)
    axios.post(resourceUrl+register, formData);
  },

  login: function(userDatas) {
      const email = encodeURIComponent(userDatas.email);
      const password = encodeURIComponent(userDatas.password);
      const formData = `email=${email}&password=${password}`;
      alert(formData)

      return axios.post(resourceUrl+login, formData)
            .then(response => {
              response.data
            })
            .catch(error => {
              error});
            }
  }
