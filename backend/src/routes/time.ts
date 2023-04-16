import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (_, res) {
  const serverTimeSeconds = new Date().getTime() / 1000;
  res.send({
    epoch: serverTimeSeconds,
  });
});

export default router;
