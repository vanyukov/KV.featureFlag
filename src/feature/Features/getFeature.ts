import { LS } from "common/LS"
import { TFeature } from "./featuresTypes"

let id = 0
type TGtFeature = {
  title: string
  defaultValue: string
  doParse?: boolean
  href?: string
}
export const getFeature = async ({ title, defaultValue, doParse, href }: TGtFeature): Promise<TFeature> => {
  const value = await LS.get(title, doParse)
  return {
    id: id++,
    title,
    value: value || defaultValue,
    defaultValue,
    status: value ? "on" : "off",
    href,
  }
}
