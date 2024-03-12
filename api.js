//  const express = require('express')
//  var cors = require('cors')
//  const app = express()
//  app.use(cors())
//  app.get('/', function (req, res) {
//    res.send('Hello World')
//  })

//  app.listen(3000)


const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.send('sarah!!!!')
})

app.get('/students',(req,res)=>{
  let data = [{id:54, name:'sophie'},{id:22, name:'jad'},{id:12, name:'ali'}]
  res.send(data)
})
// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});