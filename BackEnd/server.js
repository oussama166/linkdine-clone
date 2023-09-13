// Module import

const cookieParser = require("cookie-parser");
const express = require("express");
const userRouter = require("./Route/routeControlers");
const fetch = require("node-fetch"); // Import the fetch library if not already imported

require("dotenv").config();

// Initilaze the express app
const app = express();

// Middlware

// Regulare midleware

// Cookie middleware
app.use(cookieParser());

// App middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link
const data =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json";

// End of the midleware

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api", userRouter);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

const dataUrl =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json";

app.get("/country", async (req, res) => {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
