const fs = require("fs");

// File destination.txt will be created or overwritten by default.
fs.copyFile("dist/app/index.html", "dist/app/200.html", (err) => {
  if (err) throw err;
  console.log("created 200.html");
});
