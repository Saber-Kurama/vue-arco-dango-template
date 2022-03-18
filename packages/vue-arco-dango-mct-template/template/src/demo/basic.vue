<template>
  <AQueryTable
    :request="request" 
    :columns="columns"
    :params="params" 
  ></AQueryTable>
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
        },
      ],
      async request() {
      // { data, success, total }
      return {
        success: true,
        data: [{ name: 123 }],
        total: 100,
      };
    },
    };
  },
  components: {
    AQueryTable,
  },
  methods: {},
};
</script>
