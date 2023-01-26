const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
app.use(cors({origin:true}));

app.get("/", (req, res) => {
    res.json({
      response:200,
      data:{
          namaBarang:"meja",
          harga:2000,
      }
    })
  });
  //testing

app.post("/", (req, res)=>{
    res.send("METHOD POST")
})

