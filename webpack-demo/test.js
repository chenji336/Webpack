// webpack是自带支持的，但是node直接运行的话是不支持import的
// import _ from 'lodash'; 

var path = require('path');
console.log(path.resolve('dist'));
console.log(path.resolve(__dirname,'dist'));
console.log(path.join(__dirname,'dist'));