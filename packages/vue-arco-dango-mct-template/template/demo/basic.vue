
<template>
  <tooltip-button :buttonProps="buttonProps" :tooltipProps="tooltipProps"
    >我是ToolyipButton</tooltip-button
  >
</template>

<script lang="ts">
import TooltipButton from '@CONST_PACKAGE_NAME@'

export default {
  name: 'BasicDemo',
  data() {
    return {
      tooltipProps: {
        content: 'tiptip123'
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
