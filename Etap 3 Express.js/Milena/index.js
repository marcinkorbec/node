const express =require('express');
const app=express();

const {calcRouter}= require("./calc")

app.use(express.static('public'))
app.use('/calc',calcRouter)
app.listen(3001)