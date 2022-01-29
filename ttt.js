const Redis = require('ioredis');
const { sendCommand } = Redis.prototype;

// Redis.prototype.sendCommand = async function (...options) {
//   var a = Date.now();
//   const response = await sendCommand.call(this, ...options);
//   var cost = Date.now() - a;

//   const record = { command: options[0].name + '  ' + options[0].args, cost: cost};
//   console.log(record, response);

//   return response;
// }

var redis = new Redis()
// redis.select(2)

// for (var t=0; t< 10000;t++) {
// 	var one = Math.floor(Math.random()*1000);
// 	var two = Math.floor(Math.random()*1000000);
// 	// var key = `test-x${one}-${two}`
// 	var key = `test-x${one}`

// 	redis.set(key, t);
// }

for (var i=0;i<1000;i++) {
	redis.hset('hh', i, i);
}


console.log('============')
return;

const host = '82.156.80.224'
const port = 7001


const clusterOptions = {redisOptions: {password: '168368', port: port, host: host}};
const client = new Redis.Cluster([{port: port, host: host}], clusterOptions)


client.on('ready', re => {
	console.log('ready');
	client.get('name').then(re =>{
		console.log(re, '=========');
		client.quit();
	}).catch(e => {
		console.log('error: ', e);
	})
})

// client.then(re=> {console.log('con', re)}).catch(e => {console.log('catch ', e)})




// qii@qii:~$ redis-cli -h 82.156.80.224 -p 7003 -c -a 168368
// 82.156.80.224:7003> cluster slots
// 1) 1) (integer) 5461
//    2) (integer) 10922
//    3) 1) "82.156.80.224"
//       2) (integer) 7002
//       3) "aa4b3cc4b0476d5e1d2983671507818a357e04c5"
//    4) 1) "82.156.80.224"
//       2) (integer) 7006
//       3) "f9bc8fd356ed952fa434384feaafb2c3aa9c4978"
// 2) 1) (integer) 10923
//    2) (integer) 16383
//    3) 1) "172.21.16.2"
//       2) (integer) 7003
//       3) "4c72de7ba87df573893257acce515e1367c5905f"
//    4) 1) "82.156.80.224"
//       2) (integer) 7004
//       3) "a5030ec2a46b4c68f012c24c33b833b057e9896d"
// 3) 1) (integer) 0
//    2) (integer) 5460
//    3) 1) "82.156.80.224"
//       2) (integer) 7001
//       3) "a211fbc871358f16ecf7848348879e6ef70837b6"
//    4) 1) "82.156.80.224"
//       2) (integer) 7005
//       3) "13920291a92837371c443d4cbaed49b35ed99bbe"