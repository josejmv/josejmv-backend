import mongoose from "mongoose";

const { Schema, model } = mongoose

const Message = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: false,
      trim: true
    },
    linkedin: {
      type: String,
      required: false,
      trim: true
    },
    github: {
      type: String,
      required: false,
      trim: true
    },
    url: {
      type: String,
      required: false,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("messages", Message);
