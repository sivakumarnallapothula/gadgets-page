const s = require("express");
const a = s();
a.get("/gadgets", (request, response) => {
  response.sendFile("gadgets.html", { root: __dirname });
});
a.listen(3000);
module.exports = a;
