const menuList = [
    {
        title: '首页',
        path: '/home',
        icon: 'el-icon-s-home',
        children:[]
    },
    {
        title: '表单',
        path: '/form',
        icon: 'el-icon-film',
        children: [
            {
                title: '登录',
                path: '/form/login',
                icon:'el-icon-s-custom',
                children:[
                    {
                        title:'普通登录',
                        path: '/form/login/pt',
                        icon:'el-icon-pie-chart',
                        children:[]
                    },
                    {
                        title:'高级登录',
                        path: '/form/login/gj',
                        icon:'el-icon-collection-tag',
                        children:[]
                    }
                ]
            },
            {
                title: '注册',
                path: '/form',
                icon:'el-icon-s-opportunity',
                children:[]
            }
        ]
    },
    {
        title: '表格',
        path: '/table',
        icon: 'el-icon-receiving',
        children: [
            {
                title: '基础表格',
                path: '/table',
                icon:'el-icon-date',
                children:[]
            },
            {
                title: '高级表格',
                path: '/table/high',
                icon:'el-icon-document-copy',
                children:[]
            }
        ]
    },
    {
        title: '富文本',
        path: '/rich',
        icon:'el-icon-wallet',
        children:[]
    },
    {
        title: '城市管理',
        path: '/city',
        icon: 'el-icon-office-building',
        children:[]
    },
    {
        title: '订单管理',
        path: '/order',
        icon: 'el-icon-notebook-1',
        children: [
            {
                title: '订单详情',
                path: '/detail',
                icon:'el-icon-reading',
                children:[]
            },
            {
                title: '结束订单',
                path: '/finish',
                icon:'el-icon-data-line',
                children:[]
            }
        ]
    },
    {
        title: '车辆地图',
        path: '/bikeMap',
        icon:'el-icon-place',
        children:[]
    },
    {
        title: '权限设置',
        path: '/permission',
        icon:'el-icon-path',
        children:[]
    },
];

module.exports = menuList

