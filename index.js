const app = require("./app");

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "\x1b[35m%s\x1b[0m",
    "Server listening on http://localhost:" + (process.env.PORT || 3000)
  );
});
