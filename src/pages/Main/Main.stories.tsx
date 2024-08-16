import type { Meta, StoryObj } from "@storybook/react"
import { Main as MainComponent } from "./Main"

const meta: Meta<typeof MainComponent> = {
  component: MainComponent,
}

export default meta
type Story = StoryObj<typeof MainComponent>

export const Main: Story = {
  render: () => <MainComponent />,
}
