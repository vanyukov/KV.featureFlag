import { TFeature } from "./featuresTypes"
import { getFeature } from "./getFeature"

export const featureList = (): Promise<TFeature[]> => {
  return Promise.all([
    getFeature({
      title: "debug:websocket",
      defaultValue: "wss://irm.prod.almara.org/wss",
      doParse: false,
      href: "wss",
    }),
    getFeature({
      title: "mxm_sentryDns",
      defaultValue: "https://js.sentry-cdn.com/ad74d04aeccc44a7b3ebf93ab87fc494.min.js",
      doParse: false,
      href: "sentry",
    }),
  ])
}
