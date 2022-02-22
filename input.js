const net = require("net");

//A function to allow for input handling
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//This allows the user to exist the game with ctrl-c
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput }
