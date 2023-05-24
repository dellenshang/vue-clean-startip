import { defineStore } from 'pinia'
import { routeMap, defaultRoutes } from '@/router/routes';
import { Auth } from '@/api/index';
import { AnyObject } from '@/types';
import router from '@/router';


export const useAuthStore = defineStore('auth', () => {
  const menu = ref([])
  const dynamicRoutes = ref([])
  const hadGetMenu = ref(false)
  const userInfo = ref({
    info: { designation: {} },
    roleList: [],
    permissionList: [],
    supportedLanguageList: []
  })
  async function Auth_Init() {
    try {
      const { data } = await Auth.getMenu();
      const { menu, dynamicRoutes } = generateRoutes(data.roleList);
      localStorage.setItem('dynamicRoutes', JSON.stringify(dynamicRoutes));
      menu.value = menu;
      dynamicRoutes.value = dynamicRoutes;
      userInfo.value = {
        info: data.userInfo,
        roleList: data.roleList,
        permissionList: data.permissionList,
        supportedLanguageList: data.supportedLanguageList
      }
      if (data.roleList.length) {
        localStorage.setItem('HadGetMenu', "true");
      } else {
        router.push('/login');
        localStorage.removeItem('LoginInfo');
        localStorage.removeItem('HadGetMenu');
      }
    } finally {
      hadGetMenu.value = true;
    }
  }

  return { menu, dynamicRoutes, hadGetMenu, userInfo,  Auth_Init }
})

function generateRoutes(data): AnyObject {
  let menu = [];
  let dynamicRoutes = [];
  dynamicRoutes = routeMap.map((e) => {
    let exist = false;
    data.forEach((j) => {
      if (e.meta.roles.indexOf(j.authority) > -1) {
        exist = true;
      }
    });
    if (exist) {
      return e;
    }
  });
  menu = defaultRoutes.concat(dynamicRoutes);
  return { menu, dynamicRoutes };
}