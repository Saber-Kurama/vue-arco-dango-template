import { mount } from '@vue/test-utils';
import Button from '../QueryTable.vue';

describe('TooltipButton', () => {
  test('render <tooltip-button> content correctly', () => {
    const wrapper = mount(Button, {
      global: {
        mocks: {
          $t: (msg: string) => msg,
        },
      },
      slots: {
        default: 'test button',
      },
    });

    expect(wrapper.text()).toContain('test button');
  });
});
