import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard/analysis',
    // children: [
    //   {
    //     name: '分析页',
    //     path: 'analysis',
    //   },
    //   {
    //     name: '监控页',
    //     path: 'monitor',
    //   },
    //   {
    //     name: '工作台',
    //     path: 'workplace',
    //     // hideInBreadcrumb: true,
    //     // hideInMenu: true,
    //   },
    // ],
  },
  {
    name: '防刷',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '实时数据',
        path: 'real-data',
      },
      {
        name: '历史趋势',
        path: 'his-trend',
      },
      {
        name: '接入指引',
        authority: 'admin',
        path: 'step-form',
      },
      {
        name: '管理配置',
        path: 'manage-config',
      },
    ],
  },
  {
    name: '验证码',
    icon: 'table',
    path: 'list/todo',
    // children: [
    //   {
    //     name: '查询表格',
    //     path: 'table-list',
    //   },
    //   {
    //     name: '标准列表',
    //     path: 'basic-list',
    //   },
    //   {
    //     name: '卡片列表',
    //     path: 'card-list',
    //   },
    //   {
    //     name: '搜索列表',
    //     path: 'search',
    //     children: [
    //       {
    //         name: '搜索列表（文章）',
    //         path: 'articles',
    //       },
    //       {
    //         name: '搜索列表（项目）',
    //         path: 'projects',
    //       },
    //       {
    //         name: '搜索列表（应用）',
    //         path: 'applications',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: '多维验证',
    icon: 'codepen',
    path: 'profile/todo',
    // children: [
    //   {
    //     name: '基础详情页',
    //     path: 'basic',
    //   },
    //   {
    //     name: '高级详情页',
    //     path: 'advanced',
    //     authority: 'admin',
    //   },
    // ],
  },
  {
    name: '风险洞察',
    icon: 'check-circle-o',
    path: 'result/todo',
    //children: [
    // {
    //   name: '成功',
    //   path: 'success',
    // },
    // {
    //   name: '失败',
    //   path: 'fail',
    // },
    //],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
