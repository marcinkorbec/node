const express = require('express');
const {readFile, writeFile} = require('fs').promises;

const app = express();

app.use(express.json());