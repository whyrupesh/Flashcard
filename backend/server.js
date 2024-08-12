const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://groceryadmin:789Asdf123@grocery-cluster.uwe15mr.mongodb.net/?retryWrites=true&w=majority&appName=grocery-cluster"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const storageSchema = new mongoose.Schema({
  front: { type: String, required: true },
  back: { type: String, required: true },
});

const Storage = mongoose.model("Storage", storageSchema);

// CRUD Operations

// Create (C)
app.post("/cards", async (req, res) => {
  try {
    const { front, back } = req.body;
    const newStorage = new Storage({ front, back });
    await newStorage.save();
    res.status(201).json(newStorage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read (R) - Get all
app.get("/cards", async (req, res) => {
  try {
    const storages = await Storage.find();
    res.status(200).json(storages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read (R) - Get one by ID
app.get("/cards/:id", async (req, res) => {
  try {
    const storage = await Storage.findById(req.params.id);
    if (!storage) {
      return res.status(404).json({ message: "Storage not found" });
    }
    res.status(200).json(storage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update (U)
app.put("/cards/:id", async (req, res) => {
  try {
    const { front, back } = req.body;
    const updatedStorage = await Storage.findByIdAndUpdate(
      req.params.id,
      { front, back },
      { new: true } // Return the updated document
    );
    if (!updatedStorage) {
      return res.status(404).json({ message: "Storage not found" });
    }
    res.status(200).json(updatedStorage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete (D)
app.delete("/cards/:id", async (req, res) => {
  try {
    const deletedStorage = await Storage.findByIdAndDelete(req.params.id);
    if (!deletedStorage) {
      return res.status(404).json({ message: "Storage not found" });
    }
    res.status(200).json({ message: "Storage deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
