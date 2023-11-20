import mongoose, { Schema } from "mongoose";

const ideaSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Idea = mongoose.models.Idea || mongoose.model("Idea", ideaSchema);

export default Idea;
