import express from 'express';

const app = express();

const usuarios= [
    {id:'1', nombre:"Mauricio", apellido:"Macri", edad:25},
    {id:'2', nombre:"Juan Carlos", apellido:"Mansilla", edad:34},
    {id:'3', nombre:"Viviana", apellido:"Canosa", edad:56},
]

app.get ('/', (req,res)=>{
    res.send({usuarios})
})
app.get('/:idUsuario',(req,res)=>{
    let idUsuario= req.params.idUsuario;

    let usuario= usuarios.find(u=>u.id===idUsuario);

    if(!usuario) return res.send({error: "Usuario no encontrado"})

    res.send({usuario})

})
app.listen(8080,()=>console.log("listo para probar caso practico."))


