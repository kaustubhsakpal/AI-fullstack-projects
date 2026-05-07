import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { router } from "./routes/ai.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/ai", router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});