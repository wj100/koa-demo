# koa-demo
### 使用koa构建的node服务端，

######  安装

```
npm install
```

######  启动

```
node app
```

###  项目结构

app.js为项目主入口,使用MVC架构

controller文件夹为响应路由的业务逻辑代码

router文件夹为各模块路由

service文件夹为数据访问业务代码

### 数据库

连接设置在service>db-config.js

数据库名test

表名user

仅有username和password两个字段

###  测试连接

test.html

