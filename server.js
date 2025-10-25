const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRouter = require('./Routers/UserRouter');
app.use(cors());
app.use(express.json());
app.use('/getUsers', userRouter);
app.use('/add-user', userRouter);

const app = express();