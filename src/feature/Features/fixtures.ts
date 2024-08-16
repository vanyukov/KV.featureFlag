import { TFeature } from "./featuresTypes"
import { getFeature } from "./getFeature"

export const featureList = (): Promise<TFeature[]> => {
  return Promise.all([
    getFeature("debug:websocket", "wss://irm.prod.almara.org/wss", false),
    getFeature("mxm_sentryDns", "https://js.sentry-cdn.com/ad74d04aeccc44a7b3ebf93ab87fc494.min.js", false),
  ])
}
