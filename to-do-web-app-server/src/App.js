import express from "express";
import cors from 'cors';

import Routes from "./routes/index.js";

import db from "./database/DBConnection.js";

const App = express();

App.use(express.json());
App.use(cors());
App.use(Routes);

App.listen(5000, () => console.log('Server is running on port 5000'));