/*
	assers - 断言
*/ 
const assert = require("assert")

assert(3<2,"err");
/*接受三个参数：第一个参数为变量，第二个参数为预期值，第三个参数为返回的错误提示*/
let test = 3;
assert.deepEqual(test,5,"err");
/*同上述参数，且相当于“===” 模式*/

assert.deepStrictEqual(test,"5","错误信息");