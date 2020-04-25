const Stromer = require('./lib/index.js');
var account = require("./account.js");
const api = new Stromer(account);

api.bike.state.get().then(state => console.log(state));
