
var app = require("express")();
var io = require("socket.io")(801);
var path = "";
var md5 = "";

app.get("/css/style.css",function(req,res){
    res.sendFile(__dirname+"/css/style.css");
})
app.get("",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/notification.mp3",function(req,res){
    res.sendFile(__dirname+"/notification.mp3");
})
app.get("/message.html",function(req,res){
    res.sendFile(__dirname+"/message.html");
    md5 = req.query.md5;
})
app.listen((process.env.PORT || 80),function(){
    console.log("80. Port Dinleniliyor");
})
io.on("connection",function(socket){
    console.log('Bağlandı');
    socket.on("disconnect",function(){
        console.log("Bir kullanıcı odadan ayrıldı");
    })
    socket.on(md5,function(msg){
        io.emit(md5,msg);
        console.log(msg);
    })
})
