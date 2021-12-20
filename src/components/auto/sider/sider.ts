export const sider: Array<any> = [
  {
    siteId: 'TMG_INP',
    moduleIndex: 1,
    url: 'workProcess',
    type: '1',
    orderNum: 1,
    icon: 'WorkRegistration01',
    perms: 'TMG_INP',
    jaName: '工作流程',
    pageId: 'TMG_INP',
    secondMenuList: [
      {
        url: '/workProcess/modeMgt',
        type: '3',
        orderNum: 2,
        icon: 'Stamping07',
        perms: 'TMG_INP_TmgTimePunch',
        jaName: '模型管理',
        pageId: 'TmgTimePunch',
        siteId: 'TMG_INP',
        menuIndex: 1
      },
      {
        url: '/workProcess/processMgt',
        type: '3',
        orderNum: 3,
        icon: 'WorkRegistration01',
        perms: 'TMG_INP_TmgResults',
        jaName: '流程管理',
        pageId: 'TmgResults',
        siteId: 'TMG_INP',
        menuIndex: 2
      }
    ]
  },
  {
    siteId: 'TMG_PERM',
    moduleIndex: 4,
    url: 'flow',
    type: '1',
    orderNum: 10,
    icon: 'WorkApproval02',
    perms: 'TMG_PERM',
    jaName: '业务办理',
    pageId: 'TMG_PERM',
    secondMenuList: [
      {
        url: '/flow/dynamicSheet',
        type: '3',
        orderNum: 11,
        icon: 'ApprovalStatusList11',
        perms: 'TMG_PERM_PermStatList',
        jaName: '动态表单创建',
        pageId: 'PermStatList',
        siteId: 'TMG_PERM',
        menuIndex: 1
      }
    ]
  },
  {
    siteId: 'TMG_ADMIN',
    moduleIndex: 3,
    url: 'tmg_admin',
    type: '1',
    orderNum: 25,
    icon: 'WorkManage03',
    perms: 'TMG_ADMIN',
    jaName: '个人任务',
    pageId: 'TMG_ADMIN',
    secondMenuList: [
      {
        url: '/personaltask/ontheway',
        type: '3',
        orderNum: 26,
        icon: 'ApprovalStatusList11',
        perms: 'TMG_ADMIN_PermStatList',
        jaName: '代办任务',
        pageId: 'PermStatList',
        siteId: 'TMG_ADMIN',
        menuIndex: 1
      },
      {
        url: '/personaltask/done',
        type: '3',
        orderNum: 27,
        icon: 'WorkApproval02',
        perms: 'TMG_ADMIN_TmgResults',
        jaName: '已办任务',
        pageId: 'TmgResults',
        siteId: 'TMG_ADMIN',
        menuIndex: 2
      }
    ]
  },
  {
    siteId: 'processInstance',
    moduleIndex: 3,
    url: 'tmg_admin',
    type: '1',
    orderNum: 25,
    icon: 'WorkManage03',
    jaName: '个人任务',
    pageId: 'processInstance',
    secondMenuList: [
      {
        url: '/processInstance/ontheway',
        type: '3',
        orderNum: 26,
        icon: 'ApprovalStatusList11',
        jaName: '运行中流程',
        pageId: 'PermStatList',
        siteId: 'processInstance',
        menuIndex: 1
      },
      {
        url: '/processInstance/done',
        type: '3',
        orderNum: 27,
        icon: 'WorkApproval02',
        jaName: '已结束流程',
        pageId: 'TmgResults',
        siteId: 'processInstance',
        menuIndex: 2
      }
    ]
  }
]
