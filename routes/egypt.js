const express = require("express"); 
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Welcome to Egypt!");
});

router.get("/cairo", (request, response) => {
    console.log("running to cairo");
    const obj = {pyramids: "yes", overheating: "definitely"};
    const jsonObj = JSON.stringify(obj);
    response.send(jsonObj);
});

module.exports = router;
