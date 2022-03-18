<script lang="ts">
import { computed, defineComponent, ref, useAttrs, useSlots, watch } from "vue";
import { Table, TableColumn } from "@arco-design/web-vue";
import type { TableColumn as TableColumnType } from "@arco-design/web-vue/es/table/interface";
import type { PaginationProps } from "@arco-design/web-vue/es/pagination/interface";

export default defineComponent({
  name: "AQueryTable",
});
</script>
<script lang="ts" setup>
// todo: any
interface PropsI {
  /**
   * 请求参数
   */
  params: any;
  /**
   * table columns
   */
  columns: any[];
  /**
   * 请求接口
   */
  request: any;
}
const props = withDefaults(defineProps<PropsI>(), {
  columns: () => [] as TableColumnType[],
});
const slots = useSlots();
// 表格数据
const tableData = ref([]);
// 当前页数
const pageNum = ref(1);
// 当前条数
const pageSize = ref(10);
// 总条数
const totalRef = ref(0);

//
const hasSlotRenderName = computed(() => {
  return props.columns.some((colum) => colum.slotRenderName)
});
const pagination = computed(
  () =>
    ({
      total: totalRef.value,
      showJumper: true,
      // showMore: true,
      showPageSize: true,
      showTotal: true,
      current: pageNum.value,
    } as PaginationProps)
);
const fetchData = async () => {
  // 后面要判断是否是函数
  if (props.request) {
    const { data, success, total } = await props.request.call(null, {
      ...props.params,
      pageNum: pageNum.value,
      pageSize: pageSize.value,
    });
    console.log("datadata", data);
    if (success) {
      tableData.value = data;
      totalRef.value = total;
    }
  }
};
fetchData();
watch(
  () => props.params,
  () => {
    if (pageNum.value === 1) {
      fetchData();
    } else {
      pageNum.value = 1;
    }
    // pageSize.value = 10
    // fetchData()
  },
  { deep: true }
);
watch([pageNum, pageSize], (newVal, oldVal) => {
  console.log({ newVal, oldVal });
  fetchData();
});
const onPageSizeChange = (size: number) => {
  pageSize.value = size;
};

const onPageChange = (page: number) => {
  pageNum.value = page;
};

// reload
// 只是刷新 不修改任何
const reload = () => {
  console.log("刷新");
  fetchData();
};
// 重置刷新的话就是 到第一页
const reloadAndRest = () => {
  console.log("重置刷新");
  if (pageNum.value === 1) {
    fetchData();
  } else {
    pageNum.value = 1;
  }
};
const reset = () => {
  console.log("重置");
};
// 导出所有功能
defineExpose({
  reload,
  reloadAndRest,
  reset,
});
const attrs = useAttrs();
</script>

<template>
  <Table
    v-if="slots.columns"
    :data="tableData"
    :pagination="pagination"
    @page-size-change="onPageSizeChange"
    @page-change="onPageChange"
    v-bind="attrs"
  >
    <template #columns>
      <slot name="columns"></slot>
    </template>
  </Table>
  
  <Table
    :columns="props.columns"
    :data="tableData"
    :pagination="pagination"
    @page-size-change="onPageSizeChange"
    @page-change="onPageChange"
    v-bind="attrs" 
    v-if="!slots.columns && !hasSlotRenderName"
  >
  </Table>
  <!-- 没有 hasSlotRenderName 只有columns 好像也可以在下面正常显示， (为了防止下面出现不明的bug，上面两种正常写法是可以保证的)   -->
  <Table
    :data="tableData"
    :pagination="pagination"
    @page-size-change="onPageSizeChange"
    @page-change="onPageChange"
    v-bind="attrs"
    v-if="!slots.columns && hasSlotRenderName"
  >
   <template #columns>
     <TableColumn v-for=" columns in  props.columns" v-bind="columns" :key="columns.title" >
       <template #cell="scope" v-if="columns.slotRenderName" >
         <slot :name="columns.slotRenderName" v-bind="scope"></slot> 
        </template>
     </TableColumn>
   </template>
  </Table>
</template>
