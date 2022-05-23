import express, { json } from "express";
import chalk from "chalk";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(json());
app.use(cors());
app.use(cookieParser());

app.post("/sendName", (req, res) => {
    const { name } = req.body;

    res.cookie("name", name);
    res.sendStatus(200);
});

app.get("/sendName",  (req, res) => {
    res.send(req.cookies);
});

app.listen(5000, () => console.log(chalk.bold.cyanBright("Server is running at port 5000 👍")));