
### `<query-table>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|params **(必填)**|请求参数|`any`|`-`|



## Demos

```json type=description
[
  {
    "kind": "file",
    "title": "a-query-table",
    "memberOf": "组件类型，例如：数据输入",
    "description": "查询表格。"
  },
  {
    "kind": "member",
    "title": "基本用法",
    "description": "基本的columns例子"
  },
  {
    "kind": "member",
    "title": "slot用法",
    "description": "table使用slot"
  },
  {
    "kind": "member",
    "title": "slotRenderName用法",
    "description": "columns中使用slotRenderName"
  }
]
```

```vue
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

```

```vue
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

```

```vue
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

```

