import { LS } from "common/LS"
import { TFeature } from "./featuresTypes"

let id = 0
export const getFeature = async (title: string, defaultValue: string, doParse?: boolean): Promise<TFeature> => {
  const value = await LS.get(title, doParse)
  return {
    id: id++,
    title,
    value: value || defaultValue,
    defaultValue,
    status: value ? "on" : "off",
  }
}
