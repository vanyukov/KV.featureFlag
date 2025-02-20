import type { Meta, StoryObj } from "@storybook/react"
import { GoToPage as GoToPageComponent } from "./GoToPage"

const meta: Meta<typeof GoToPageComponent> = {
  component: GoToPageComponent,
}

export default meta
type Story = StoryObj<typeof GoToPageComponent>

export const GoToPage: Story = {
  args: {},
  render: props => (<GoToPageComponent {...props} />),
}
