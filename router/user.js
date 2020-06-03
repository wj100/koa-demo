const router = require('koa-router')();
const user = require('../controller/user');
module.exports = (app) => {
    router.post('/userLogin', user.userLogin);
    router.get('/userMenu', user.userMenu);
    app.use(router.routes()).use(router.allowedMethods());
}
