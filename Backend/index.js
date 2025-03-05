const port = 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path'); // to get backend directory in this app


app.use(express.json());
app.use(cors());