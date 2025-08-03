const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors());
app.use(express.json(corsOptions));

// mongodb
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("NGO");
    const applicationsCollection = db.collection("applications");

    app.post("/applications", async (req, res) => {
      try {
        const application = req.body;
        const result = await applicationsCollection.insertOne(application);
        res.send(result);
      } catch (err) {
        res.status(404).send({ message: err.message });
      }
    });

    app.get("/applications", async (req, res) => {
      try {
        const result = await applicationsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(404).send({ message: error.message });
      }
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
