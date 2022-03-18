/**
 * @file "@CONST_PACKAGE_NAME@
 * @title a-query-table
 * @memberOf 组件类型，例如：数据输入
 * @description 查询表格。
 */
import Basic from "./basic.vue";
import SlotTable from "./SlotTable.vue";
import SlotRenderName from "./SlotRenderName.vue";

/**
 * @title 基本用法
 * @description 基本的columns例子
 */

const BasicDemo = () => Basic;
BasicDemo.storyName = "基本例子";

/**
 * @title slot用法
 * @description table使用slot
 */
const SoltTableDemo = () => SlotTable;
SoltTableDemo.storyName = "使用slot";

/**
 * @title slotRenderName用法
 * @description columns中使用slotRenderName
 */
 const SlotRenderNameDemo = () => SlotRenderName;
 SlotRenderNameDemo.storyName = "使用slotRenderName";

export { BasicDemo, SoltTableDemo, SlotRenderNameDemo };

