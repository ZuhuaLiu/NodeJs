//全局对象
// var time = 0;
// setInterval(() => {
//     time +=2;
//     console.log(time+'seconds');
// },3000);
// console.log(__filename);


//回调函数
// function sayHi() {
//     console.log('Hi');
// }

// sayHi();

// var sayBye = function(name) {
//     console.log(name+'Bye');
// }

// sayBye();

// function callFunction(func, name) {
//     func(name);
// }

// callFunction(sayBye, 'rails365');


//模块
// var middle = require('./count');
// import {counter} from './count'

// console.log(middle.counter(['a','b','c']));

//事件
// var events = require('events');
// var util = require('util');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message){
//     console.log(message);
// });

// myEmitter.emit('someEvent','1');

// var Person = function(name) {
//     this.name = name
// }

// util.inherits(Person, events.EventEmitter);

// var xiaoming = new Person('xiaoming');
// var lili = new Person('lili');
// var lucy = new Person('lucy');

// var person = [xiaoming, lili, lucy];

// person.forEach(function(person) {
//     person.on('speak', function(message) {
//         console.log(person.name + " said: " + message);
//     })
// })

// xiaoming.emit('speak', 'hi');
// lucy.emit('speak', 'I want a curry');

// 异步操作的方法 readFile writeFile 读写文件
// var fs = require('fs');

// var readMe = fs.readFileSync("readMe.text",'utf8');
// var readMe = fs.readFile("readMe.text",'utf8', function(err,data){
//     console.log(data);
// });
// console.log(readMe);

// fs.writeFileSync('writeMe.text',readMe);



//创建和删除目录
// var fs = require('fs');

// fs.unlink('writeMe.text',function(){

// });

// fs.mkdir('stuff',() => {
//     fs.readFile('readMe.text','utf8',(err, data) => {
//         fs.writeFile('./stuff/writeMe.text',data, () => {
//             console.log('code 0');
//         })
//     })
// })



//流和管道
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.text', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.text');

// var data = '';

// myReadStream.on('data', function(chunk){
//     data += chunk;
//     myWriteStream.write(chunk);
// })
// myReadStream.on('end', function(){
//     console.log(data);
// })
// var writeData = "hello world";
// myWriteStream.write(writeData);
// myWriteStream.end();
// myWriteStream.on('finish', function() {
//     console.log('finished');
// })

// myReadStream.pipe(myWriteStream);

// var crypto = require('crypto');
// var fs = require('fs');
// var zlib = require('zlib');

// var password = new Buffer(process.env.PASS || 'password');
// var encryptStream = crypto.createCipher('aes-256-cbc', password);

// var gzip = zlib.createGzip();
// var readStream = fs.createReadStream(__dirname + "/readMe.txt"); // current file
// var writeStream = fs.createWriteStream(__dirname + '/out.gz');

// readStream // reads current file
//     .pipe(encryptStream) // encrypts
//     .pipe(gzip) // compresses
//     .pipe(writeStream) // writes to out file
//     .on('finish', function() { // all done
//         console.log('done');
//     });

var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var decryptStream = crypto.createDecipher('aes-256-cbc', password);

var gzip = zlib.createGunzip();
var readStream = fs.createReadStream(__dirname + '/out.gz');

readStream // reads current file
    .pipe(gzip) // uncompresses
    .pipe(decryptStream) // decrypts
    .pipe(process.stdout) // writes to terminal
    .on('finish', function() { // finished
        console.log('done');
    });







