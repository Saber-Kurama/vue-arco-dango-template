```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

带气泡的按钮

```vue
<template>
  <tooltip-button :buttonProps="buttonProps" :tooltipProps="tooltipProps"
    >我是ToolyipButton</tooltip-button
  >
</template>

<script lang="ts">
import TooltipButton from '@dangojs/saber-arco-button-demo'

export default {
  name: 'BasicDemo',
  data() {
    return {
      tooltipProps: {
        content: 'tiptip'
      },
      buttonProps: {
        shape: 'round'
      }
    }
  },
  components: {
    TooltipButton
  }
}
</script>


```
