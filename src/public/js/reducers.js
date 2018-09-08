const alertReducer = require("./components/alert/alertReducer");
const inboxReducer = require("./components/inbox/inboxReducer");
const composeEmailReducer = require("./components/navigationBar/components/composeEmail/composeEmailReducer");
const navigationListReducer = require("./components/navigationBar/components/navigationList/navigationListReducer");
const { combineReducers } = require("redux");

module.exports = combineReducers({
  alert: alertReducer,
  inbox: inboxReducer,
  navigationList: navigationListReducer,
  composeEmail: composeEmailReducer
});
