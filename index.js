import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/add',(req,res)=>{
    const {a,b} = req.query;
    const sum = Number(a) + Number(b);
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/subtract',(req,res)=>{
    const {a,b} = req.query;
    const difference = Number(a) - Number(b);
    res.send(`The difference between ${a} and ${b} is ${difference}`);
});

app.get('/multiply',(req,res)=>{
    const {a,b} = req.query;
    const product = Number(a) * Number(b);
    res.send(`The product of ${a} and ${b} is ${product}`);
}); 

app.get('/divide',(req,res)=>{
    const {a,b} = req.query;
    if (Number(b) === 0) {
        res.send("Division by zero is not allowed.");
    } else {
        const quotient = Number(a) / Number(b);
        res.send(`The quotient of ${a} and ${b} is ${quotient}`);
    }
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});