import express from 'express';
import cors from 'cors';
import {getVideosController} from "./videos/getVideosController";

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/videos',  getVideosController);


