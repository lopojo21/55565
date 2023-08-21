const http = require( `http`);
const express = require('express');


const server= http.createServer((request,response)=>{
    response.end("1° server las",utf-8)
})
server.listen(8080,()=>{
    console.log("Listening on port 8080")
})