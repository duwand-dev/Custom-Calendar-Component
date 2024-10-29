//external imports
import { Router } from "express";

//internal imports
import { AddEvent, GetAllEvents } from "../actions/event.action";

const router = Router();

router.post("/addevent", async (req, res) => {
  try {
    const { event } = req.body;
    await AddEvent(event);
    res.status(200).send({ isSuccess: true });
  } catch (err) {
    console.error(err);
    res.status(400).send({ isSuccess: false });
  }
});

router.post("/getevents", async (req, res) => {
  try {
    const result = await GetAllEvents();
    res.status(200).send({ isSuccess: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(400).send({ isSuccess: false });
  }
});

export const ArticleRouter = router;
