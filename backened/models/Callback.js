import mongoose from "mongoose";

const callbackSchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Callback", callbackSchema);
