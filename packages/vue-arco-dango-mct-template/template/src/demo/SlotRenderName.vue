<template>
  <AQueryTable :request="request" :columns="columns" :params="params">
    <template #name="scope">
      <div @click="() => onCellClick(scope)">saber---</div>
    </template>
  </AQueryTable>
</template>

<script lang="ts">
import AQueryTable from "@CONST_PACKAGE_NAME@";

// 目前vue-live导出defineComponent存在问题，所以仅支持普通对象导出。
export default {
  name: "BasicDemo",
  data() {
    return {
      params: {},
      tableData: [{ name: "1" }],
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          slotRenderName: "name",
        },
      ],
    };
  },
  components: {
    AQueryTable,
  },
  methods: {
    onCellClick(scope) {
      console.log('scope', scope)
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
