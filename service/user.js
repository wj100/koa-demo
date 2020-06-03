
const query =require('./db-init')
const fetch = require('node-fetch')
const menuList=require('../mock/menuList')
module.exports = {
    getMenulist(){
        return menuList
    },
    async userLogin(username,password) {
        const result = await query(`SELECT * FROM user WHERE username = ?`, [username])
        if (result.length === 0) {
            return {code:200,msg:'用户不存在'}
        } else if(result[0].password !== password) {
            return {code:200,msg:'密码错误'}
        } else {
            // req.session.userInfo = {id: result[0].username}
            // console.log(req.session.userInfo);
            return {code:200,role:'admin',msg:'登录成功',token:'gdf45er1rt2r00'}
        }
    },


}
