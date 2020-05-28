const testService = require('../service/test');
module.exports = {
    user: async (ctx, next) => {
        let res =await testService.getData()
        ctx.response.body={code: 200,msg:'请求成功',users:res}
    },

    register: async (ctx, next) => {
        let {username, password} = ctx.request.body;
        let res =await testService.postData(username,password)
        ctx.response.status = 200
        ctx.response.body = {code: 200, msg: '注册成功！', data: res}
    }
}
