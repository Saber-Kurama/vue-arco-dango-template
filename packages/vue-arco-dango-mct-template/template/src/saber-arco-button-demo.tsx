
import { defineComponent, PropType } from "vue";
import { Button as ArcoButton, Tooltip } from "@arco-design/web-vue";
import type { ButtonInstance } from '@arco-design/web-vue/es/button';
import type { TooltipInstance } from '@arco-design/web-vue/es/tooltip';

const TooltipButton = defineComponent({
  name: "TooltipButton",
  props: {
    /**
     * 文字气泡组件Props
     */
    tooltipProps: {
      type: Object as PropType<TooltipInstance['$props']>,
      default: () => { }
    },
    /**
     * 按钮组件Props
     */
    buttonProps: {
      type: Object as PropType<ButtonInstance['$props']>,
      default: () => { }
    }
  },
  setup: (props, { slots, emit }) => {
    return () => {
      const { tooltipProps, buttonProps } = props;
      return (
        <>
          {
            tooltipProps?.content ? (
              <Tooltip content={tooltipProps?.content} position="bottom">
                <ArcoButton onClick={() => emit('click')} class="tooltip-button" {...buttonProps}>
                  {slots['default']?.()}
                </ArcoButton>
              </Tooltip>
            ) : (
              <ArcoButton onClick={() => emit('click')} class="tooltip-button" {...buttonProps}>
                {slots['default']?.()}
              </ArcoButton>
            )
          }
        </>
      );
    };
  }
});

export default TooltipButton;
