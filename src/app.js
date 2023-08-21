import ProductManager from "./productMannager.js";
import express from 'express';

const PORT= 8080
const pManager = new ProductManager();

const  app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/products', async(req,res)=>{

    const products = await pManager.getProducts();
    const limit = req.query.limit;
    const limite = products.length;

    if (limit<limite && limit != 0){
        return res.send(products.slice(0,limit));

    }else{
        return res.send(products);
    }
    //http://localhost:8080/products?limit=10
    //http://localhost:8080/products?limit=3
});

app.get('/products/:pid', async(req,res)=>{
    const product = await pManager.getProductByID(parseInt(req.params.pid));
    
    return res.send(product);  
    
});



app.listen(PORT,()=>console.log( `Servidor escuchando en puerto ${PORT}`))