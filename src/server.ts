import express from "express";
import { createCourse } from "./routes";

const app = express();
// o nome da rota, função que ela irá executar
app.get("/", createCourse);

app.listen(3333);