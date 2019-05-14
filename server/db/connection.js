const monk = require("monk");

const connectionURL = "localhost/eensy";

const db = monk(connectionURL);
