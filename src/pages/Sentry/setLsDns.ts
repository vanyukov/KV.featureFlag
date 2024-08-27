import { LS } from "common/LS"

export const setLsDns = (value: unknown) => {
  LS.set("mxm_sentryDns", value)
}
