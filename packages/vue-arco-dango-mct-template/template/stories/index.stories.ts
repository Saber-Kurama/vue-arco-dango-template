import type { Meta, StoryObj } from "@storybook/vue3";
// @ts-ignore
import { createStory } from "@/utils";
import '../src/style';
import SaberArcoButtonDemo from '../src';
import { Basic } from "../demo";

type Story = StoryObj<typeof SaberArcoButtonDemo>;
const meta: Meta<typeof SaberArcoButtonDemo> = {
  title: "@dangojs/saber-arco-button-demo",
  component: SaberArcoButtonDemo as any,
};

export const BasicStory: Story = createStory(Basic)

export default meta;