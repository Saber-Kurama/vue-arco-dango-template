```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

`a-query-table` 查询表格的 基本使用

---

```vue
<template>
  <AQueryTable
    :request="request"
    :columns="columns"
    :params="params"
    :loading="loading"
  ></AQueryTable>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import AQueryTable from "@dangojs/a-query-table";


const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];
const loading = ref(false);
const sleep = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
const request = async (query: any) => {
  // { data, success, total }
  loading.value = true;
  console.log('query的请求参数', query)
  await sleep(1000);
  loading.value = false;
  return {
    success: true,
    data,
    total: 100,
  };
};
const params = reactive({
  name: ''
})
</script>

```