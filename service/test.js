//这里可以进行数据库查询等数据操作
const query =require('./db-init')
const fetch = require('node-fetch')
const menuList=require('../mock/menuList')
module.exports = {
    getMenulist(){
        return menuList
    },
     getData() {
       let result=  fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => json);
       return result
    },

    async postData(name,pass) {
        const result = await query(`INSERT INTO user(username,password) VALUES (?,?)`, [name,pass]);
        return result
    },


}
