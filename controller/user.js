const userService = require('../service/user');
module.exports = {
    userLogin: async (ctx, next) => {
        let {username, password} = ctx.request.body;
        let res = await userService.userLogin(username, password)
        ctx.response.status = 200
        ctx.response.body = res
    },
    userMenu: (ctx) => {
        let json = userService.getMenulist()
        ctx.response.body = {code: 200, msg: '获取菜单成功', data: json}
    }

}
