//internal imports
import { Event } from "../models/event.model";

interface NoteType {
  date: Date;
  note: string;
}

export const AddEvent = async (event: Array<NoteType>) => {
  try {
    await Event.deleteMany({});
    const newEvent = new Event({ events: event });
    await newEvent.save();
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject();
  }
};

export const GetAllEvents = async () => {
  try {
    const results = await Event.find({});
    return Promise.resolve(results[0]);
  } catch (err) {
    console.error(err);
    return Promise.reject();
  }
};
