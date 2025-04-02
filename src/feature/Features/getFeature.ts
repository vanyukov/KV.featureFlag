import { LS } from "common/LS"
import { TFeature } from "./featuresTypes"
import { getCookieValue } from "common/cookie"

let id = 0
type TGtFeature = {
  title: string
  defaultValue: string
  valueSource: "localStorage" | "cookie"
  doParse?: boolean
  href?: string
}
export const getFeature = async ({
  title,
  defaultValue,
  valueSource,
  doParse,
  href,
}: TGtFeature): Promise<TFeature> => {
  var value
  if (valueSource == "localStorage") {
    value = await LS.get(title, doParse)
  } else if (valueSource == "cookie") {
    value = await getCookieValue('debug')
  }
  return {
    id: id++,
    title,
    value: value || defaultValue,
    defaultValue,
    valueSource,
    status: value ? "on" : "off",
    href,
  }
}
