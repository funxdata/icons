/*
 * @Author: dowell87
 * @Date: 2021-08-27 23:51:36
 * @Descripttion: 
 * @LastEditTime: 2021-11-15 16:50:08
 */
// 导入组件，组件必须声明 name
import iconHistory from './icon/iconhistory.vue'
import iconModular from './icon/iconModular.vue'
import iconFullScreen from './icon/iconFullScreen.vue'
import iconArrowRight from './icon/iconArrowRight.vue'
import iconArrowDown from './icon/iconArrowDown.vue'
import iconArrowUp from './icon/iconArrowUp.vue'
import ArrowDownBold from './icon/ArrowDownBold.vue'
import ArrowUpBold from './icon/ArrowUpBold.vue'
import IconClose from './icon/iconClose.vue'
import IconCategory from './icon/iconCategory.vue'

// 存储组件列表
const components = [
  iconHistory,
  iconModular,
  iconFullScreen,
  iconArrowRight,
  iconArrowDown,
  iconArrowUp,
  ArrowDownBold,
  ArrowUpBold,
  IconClose,
  IconCategory
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  iconHistory,
  iconModular,
  iconFullScreen,
  iconArrowRight,
  iconArrowDown,
  iconArrowUp,
  ArrowDownBold,
  ArrowUpBold,
  IconClose,
  IconCategory,
};