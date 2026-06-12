import express from "express";
import { config } from "./lib/config";
import dataCollector from "./routes/dataCollector";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
    res.json({
        health: "ok",
        environment: config.environment,
    });
});

app.use("/api", dataCollector);

app.listen(config.port, () => console.log("backend is running..."));
