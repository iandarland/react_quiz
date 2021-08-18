const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

router.route("/")
    .post(scoreController.create)
    .get(scoreController.findAll)
    
module.exports = router;