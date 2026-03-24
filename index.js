const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url==="/soni"){
    res.end("hello my dear gf");
  }
  res.end("hello sarita")

});


server.listen(3100,()=>{
  console.log("server is listening on port 3100");
  
})