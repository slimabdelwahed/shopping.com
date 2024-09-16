const express=require("express");
const app=express();
const dotenv=require("dotenv");
const products = require("./data/products");
dotenv.config();
const PORT=process.env.PORT;
const mongoose=require("mongoose")
//connect DB
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("DB connected")).then((err)=>{
    err;
})

/*api products test route
app.get("/api/products",(req,res)=>{
    const products=products;
    res.json(products);
});

app.get("/api/products/:id",(req,res)=>{
    const products=products;
    const product=products.find((product)=>product.id===req.params.id)
    res.json(product);
});*/
const databaseSeeder=require('./databaseSeeder');
const userRoute=require("./routes/User");
const productRoute=require("./routes/Product");

app.use(express.json())

//database seeder routes
app.use('/api/seed',databaseSeeder);


// routes for users
//api/users/login
app.use('/api/users',userRoute);

//routes for products
app.use('/api/products',productRoute);

//routes for order
app.use('/api/orders',orderRoute);

app.listen(PORT || 9000,()=>{
    console.log('server listening on port ${PORT}');
});



//userName  abdelwahedslim0
//password  ONS0ZQFu05cSKygK