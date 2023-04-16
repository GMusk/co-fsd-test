import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (_, res) {
  res.send({
    properties: {
      epoch: {
        description:
          "The current server time, in epoch seconds, at time of processing the request.",
        type: "number",
      },
    },
    required: ["epoch"],
    type: "object",
  });
});

export default router;
