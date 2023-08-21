// import Express from 'express';
const express = require('express');
// import {Express} from "express";

const PORT= 8080

const app = express();

app.get('/saludo',(req, responce)=>{
    responce.send("hola a todos, pero ahora desde express!")

})

app.get('/unparametro/:nombre',(req, responce)=>{
    console.log(req.params.nombre)
    responce.send(`Bienvenido ${req.params.nombre}`)

})

app.get('/dosparametros/:nombre/:apellido',(req, responce)=>{
    console.log(req.params.nombre)
    responce.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)

})


app.listen(PORT,()=>{
    console.log(`Server escuchando en ${PORT}`)
    console.log('escuchando peticiones...')
})