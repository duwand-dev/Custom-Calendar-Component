import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  events: {
    type: Array,
  },
});

export const Event = mongoose.model("Event", EventSchema);
