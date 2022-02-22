//A file to hold initial config info and connect function
const net = require("net");
const { IP, PORT } = require("./constants")

const connect = function () {
  const name = process.argv.slice(2)
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You've successfully connected")
    conn.write(`Name: ${name}`)
  });

  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};

module.exports = { connect };