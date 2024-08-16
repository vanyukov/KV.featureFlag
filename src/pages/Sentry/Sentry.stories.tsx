import type { Meta, StoryObj } from "@storybook/react"
import { Sentry as SentryComponent } from "./Sentry"

const meta: Meta<typeof SentryComponent> = {
  component: SentryComponent,
}

export default meta
type Story = StoryObj<typeof SentryComponent>

export const Sentry: Story = {
  render: () => <SentryComponent />,
}
