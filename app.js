const Koa = require('koa');
var cors = require('koa2-cors');//跨域中间件
var bodyParser = require('koa-bodyparser');//提取post参数
const app = new Koa();

app.use(cors());
app.use(bodyParser());

//引入不同的接口请求文件
const test = require('./router/test.js');
test(app)

app.listen(3000,()=>{
    console.log('starting at port 3000');
});
