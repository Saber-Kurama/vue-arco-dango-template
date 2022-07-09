
import { App } from "vue";
import SaberArcoButtonDemo from "./saber-arco-button-demo";

const install = (app: App) => {
  app.component(SaberArcoButtonDemo.name, SaberArcoButtonDemo);
};
SaberArcoButtonDemo.install = install;

export default SaberArcoButtonDemo;
