/*
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-03-22 11:24:38
 * @LastEditors: saber
 * @Description:
 */
// TODO: 后面会添加 install 方法
import { App, Plugin } from "vue";
import Vue3TabsChrome from "./vue3-tabs-chrome.vue";
const install = (app: App) => {
  app.component("Vue3TabsChrome", Vue3TabsChrome);
};

Vue3TabsChrome.install = install;
export default Vue3TabsChrome as unknown as Plugin;
