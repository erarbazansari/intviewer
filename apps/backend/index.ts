import express from "express";
import { config } from "./lib/config";

const app = express();

app.get("/health", (_, res) => {
    res.json({
        health: "ok",
        environment: config.environment,
    });
});

app.listen(config.port, () => console.log("backend is running..."));
