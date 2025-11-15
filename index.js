//Loading .env file and importing MongoDB's client
require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");

//Server.js setup

const app = express();
const port = 5000;

//Middleware to parse JSON
app.use(express.json());

//Connection with MONGODB

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("notes-api");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();
//Route 1
app.get("/notes", async (req, res) => {
  try {
    const notes = await db.collection("notes").find({}).toArray();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Notes API",
    endpoints: {
      "GET /notes": "Get all notes",
      "GET /notes/:id": "Get single note",
      "POST /notes": "Create note",
      "DELETE /notes/:id": "Delete note",
    },
  });
});

//Route 2: To get each notes by id
app.get("/notes/:id", async (req, res) => {
  try {
    const noteID = req.params.id;
    const foundNote = await db
      .collection("notes")
      .findOne({ _id: parseInt(noteID) });

    //If no note is found
    if (foundNote) {
      res.json(foundNote);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch note" });
  }
});

//Route 3: For post aka create
app.post("/notes", async (req, res) => {
  try {
    //Getting data from request body
    const { title, content } = req.body;
    //Validating required fields
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    //Creating a new note object
    const newNote = {
      title: title,
      content: content || "",
      createdAt: new Date(),
    };

    //Adding the newly created object which is by the user to the notes array
    const result = await db.collection("notes").insertOne(newNote);

    //Send success response
    res.status(201).json({
      message: "Note created",
      note: { _id: result.insertedId, ...newNote },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a note" });
  }
});

//Route 4: For deleting notes
app.delete("/notes/:id", async (req, res) => {
  try {
    const noteID = parseInt(req.params.id);

    //Checking if there is a note in the first place
    const result = await db.collection("notes").deleteOne({ _id: noteID });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    //Send success message
    res.json({
      message: "Note deleted successfully",
      deletedId: noteID,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete note" });
  }
});
//Starting the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
