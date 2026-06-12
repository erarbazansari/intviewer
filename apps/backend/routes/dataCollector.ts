import express from "express";

const router = express.Router();

router.post("/data-collector", (req, res) => {
  res.json({ msg: "data processed" });
});

export default router;
