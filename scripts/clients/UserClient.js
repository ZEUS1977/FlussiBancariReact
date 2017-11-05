var promise = require("es6-promise");
var axios = require('axios');
var resourceUrl = "http://localhost:7777/";
//register post with all data
//login get with email or user and password
module.exports = {
    register: function (userDatas) {
      axios.post(resourceUrl, userDatas);
    }
}
