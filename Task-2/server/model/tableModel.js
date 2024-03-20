const mongoose = require("mongoose");

const { Schema } = mongoose;

const tableSchema = new Schema(
  {
    itemName: [
      {
        _id: mongoose.Types.ObjectId,
        value: String,
      },
    ],
    addCount: Number,
    updateCount: Number,
  },
  { timestamps: true }
);

const table = mongoose.model("tables", tableSchema);

module.exports = table;
