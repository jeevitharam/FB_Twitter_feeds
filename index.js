var http = require("http");
var fs = require("fs");
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'ABED4WrzuOBtySmRdTVy9JEWS',
  consumer_secret: '7l0ch38iFFc9Kp2DCvHyyPefP152aGcg3CLiB3d1QO3Kx4eutM',
  access_token_key: '412987885-n6QkNqGII6AUcwIDwtSXz4wPUTka2XIkBR7JsDaw',
  access_token_secret: '3gJyix7ZCBwHvK3aszs6ynOy7Z4BAtcmhdC9HpsgKPF9F'
});
 
var params = {screen_name: 'JeevithaRam'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

var server = http.createServer(function(req, res){

    if("/getfeeds"){
        
        client.get('statuses/user_timeline', params, function(error, tweets, response){
          if (!error) {
            console.log(tweets);
            res.writeHeader(200, {"Content-Type" : "application/json"})
            console.log(JSON.parse(tweets[0]))
            res.write(JSON.stringify(tweets));
          }
        });
        
    }
else if(req.url = "/"){
            fs.readFile('./app.html',function(err, html){
            if(err)
            {
                throw err;
            }
         res.writeHeader(200, {"Content-Type" : "text/html"})
         res.write(html);
         res.end();
         
        });
    
    }
    else{
        res.end("page not found");
    }
});

server.listen(5000, function(){
    
    console.log("your server started in new port 5000");
    
})