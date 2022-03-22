<script lang="ts">
import { Button, Tooltip } from "@arco-design/web-vue";
import { type TooltipButtonProps } from "./types";
export default defineComponent({
  name: "TooltipButton",
});
</script>
<script lang="ts" setup>
const props = defineProps<TooltipButtonProps>();
</script>
<template>
  <Tooltip v-if="props.tip" :content="props.tip" position="bottom">
    <Button class="tooltip-button" v-bind="props.buttonProps">
      <slot />
    </Button>
  </Tooltip>
  <Button v-else class="tooltip-button" v-bind="props.buttonProps">
    <slot />
  </Button>
</template>
