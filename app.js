require("dotenv").config();
const express = require("express");
const app = express();
require("./db");
const cors = require("cors");
const URL = require("./models/urlSchema");
const urlRoute = require("./routes/routes");


const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});


app.listen(PORT,()=>{
    console.log(`server start at port no : ${PORT}`);
})