const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)

  });
  conn.on("connect", () => {
    console.log("You've successfully connected")
    
  })

  conn.on("connect", () => {
    conn.write("Name: RPR");
  });

  return conn
};

module.exports = { connect };