const router = require('koa-router')();
const test = require('../controller/test');
module.exports = (app) => {
    router.get('/user', test.user);
    router.post('/register', test.register);
    // router.get('/userMenu', test.userMenu);
    app.use(router.routes()).use(router.allowedMethods());
}
