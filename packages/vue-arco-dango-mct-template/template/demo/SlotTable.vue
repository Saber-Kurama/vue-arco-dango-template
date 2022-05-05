<template>
  <AQueryTable
    :request="request"
    :params="params"
  >
    <template #columns>
      <a-table-column title="Name" data-index="name"></a-table-column>
      <a-table-column >
        <template #title>
          <div>red---</div>
        </template>
        <template #cell="{ record }">
          <div @click="() => onCellClick(record)">view</div>
        </template>
      </a-table-column>
    </template>
  </AQueryTable>
</template>

<script lang="ts">
import AQueryTable from "@CONST_PACKAGE_NAME@";
import { TableColumn } from '@arco-design/web-vue';

// 目前vue-live导出defineComponent存在问题，所以仅支持普通对象导出。
export default {
  name: "BasicDemo",
  data() {
    return {
      params: {},
      tableData: [],
      columns: [
        {
          title: "Name",
          dataIndex: "name",
        },
      ],
    };
  },
  components: {
    AQueryTable,
    ATableColumn: TableColumn,
  },
  methods: {
    onCellClick(record) {
      console.log('record', record)
    },
    async request() {
      // { data, success, total }
      return {
        success: true,
        data: [{ name: 123 }],
        total: 100,
      };
    },
  },
};
</script>
