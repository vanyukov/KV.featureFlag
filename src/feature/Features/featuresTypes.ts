import { EntityId } from "@reduxjs/toolkit"

export type TFeatureStatus = "on" | "off"
export type TFeature = {
  id: EntityId
  title: string
  value: string
  defaultValue: string
  status: TFeatureStatus
  href?: string
}
