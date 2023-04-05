const express = require("express");
const {
    handleCreateNewUrl,
    handleGet,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleCreateNewUrl);

router.get("/analytics/:shortId", handleGet);

module.exports = router;