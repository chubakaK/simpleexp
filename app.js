var express = require("express"),
    app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("index.ejs");
});

app.listen(8080, function(){
  console.log("Server running");
})
