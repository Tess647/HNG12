require("dotenv").config();
const express = require("express");
const cors = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "tessybadru@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/tess647/HNG12",
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
