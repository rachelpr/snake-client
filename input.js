const net = require("net");

let connection;

//A function to allow for input handling
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//This allows the user to exit the game with ctrl-c
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "r") {
    connection.write("Say: Race ya!")
  }
  if (key === "t") {
    connection.write("Say: Yummmm")
  }
  if (key === "e") {
    connection.write("Say: Weeeee")
  }
  if (key === "f") {
    connection.write("Say: SssssS")
  }
};


module.exports = { setupInput }
