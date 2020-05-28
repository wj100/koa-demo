const router = require('koa-router')();
const test = require('../controller/test');
module.exports = (app) => {
    router.get('/user', test.user);
    router.post('/register', test.register);
    app.use(router.routes()).use(router.allowedMethods());
}
