
var redis = require('redis');

var redis_scanner = require('redis-scanstreams')(redis);

var client = redis.createClient(18199, 'ec2-54-83-9-36.compute-1.amazonaws.com');

client.auth('p7ue7eg7cab4re7m4qejdl08p3s');


client.on('connect', function() {
console.log('Connected to Redis');

		var prompt = require('prompt');

		prompt.start();
   
     		prompt.get(['id'], function (err, result) {
    		//console.log('Command-line input received:');
   		   console.log(' Results for id: ' + result.id);
  


			var toArray = require('stream-to-array')
 
			toArray(client.scan(), function(err, arr) {
  				if (err)
   			    throw err;
 			for (key in arr)
 				{
 				client.hgetall(key, function(err, object) {
 	
 				//console.log(object);
 	
 					for (var key in object) {
 						//console.log(key);
 						var value = object[key];
 						//console.log(object[a]);
 	
 						if(key=="id" && value==result.id){
 							console.log(object);
 							}
 	
 						}
 	
    
    
					});
				 }
 
 			 console.log(arr)
			})

		});
	});

