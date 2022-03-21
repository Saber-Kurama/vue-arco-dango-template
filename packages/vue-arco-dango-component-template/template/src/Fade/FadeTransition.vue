<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-22 10:17:25
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI} from "../base/props";
import useBaseHook from "../base/hooks";
// import { useAttrs } from "vue";

export default {
  name: "FadeTransition",
  // https://vuejs.org/guide/components/attrs.html#nested-component-inheritance
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
const props = defineProps({
  ...baseProps,
});

// const emits = defineEmits<EmitsI>();
interface EmitsI extends BaseEmitsI{
}
// todo: 如何解决 警告
// https://github.com/vitejs/vite/issues/5476
// https://github.com/vuejs/core/issues/4294
const emits = defineEmits<EmitsI>()

// // const emits = defineEmits(['before-enter'])
// const attrs = useAttrs();
// todo: 这个 hook的逻辑对吗， 如果 props 发生修改呢
const { componentType, hooks} = useBaseHook(props as BasePropsType, emits);

</script>
<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="hooks"
    enter-active-class="fadeIn"
    move-class="fade-move"
    leave-active-class="fadeOut"
  >
    <slot></slot>
  </component>
</template>


