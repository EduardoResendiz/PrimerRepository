const express= require("express");
const bodyParser= require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Index.html')
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Esta vivo")
});