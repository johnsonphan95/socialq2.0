const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "This is the answer route"});
});

module.exports = router; 