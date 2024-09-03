type TCdnItem = {
  title: string
  url: string
  project: string
}
export const cdnList = (): TCdnItem[] => [
  {
    title: "cupis pre",
    url: "https://js.sentry-cdn.com/cd83ed31e8e742e0bbae1187faf3c5ef.min.js",
    project: "https://mxm-da.sentry.io/projects/cupis_desktop_pre/?project=5805651",
  },
  {
    title: "cupis prod",
    url: "https://js.sentry-cdn.com/954dbaf219a1497191232b397f2d9ae1.min.js",
    project: "https://mxm-da.sentry.io/projects/cupis_desktop_prod/?project=5805676",
  },
  {
    title: "mobile pre",
    url: "https://js.sentry-cdn.com/4ab5587a00804b60ad02d313f69ef045.min.js",
    project: "https://mxm-da.sentry.io/projects/cupis_mobile_pre/?project=5805660",
  },
  {
    title: "mobile prod",
    url: "https://js.sentry-cdn.com/7721afc5e2724d56ad81edd367626ac1.min.js",
    project: "https://mxm-da.sentry.io/projects/cupis_mobile_prod/?project=5805671",
  },
  {
    title: "zenitbet pre",
    url: "https://js.sentry-cdn.com/907f2fef388749f790734e68d092cba0.min.js",
    project: "https://mxm-da.sentry.io/projects/zenbet_desktop_pre/?project=5805663",
  },
  {
    title: "zenitbet prod",
    url: "https://js.sentry-cdn.com/5148a3b857b64453b188f2393c1dca8f.min.js",
    project: "https://mxm-da.sentry.io/projects/zenbet_desktop_prod/?project=5805668",
  },
  {
    title: "mobile_com pre",
    url: "https://js.sentry-cdn.com/843ce3cc68654ace9fdbccf23cf5193e.min.js",
    project: "https://mxm-da.sentry.io/projects/zenbet_mobile_pre/?project=5805662",
  },
  {
    title: "mobile_com prod",
    url: "https://js.sentry-cdn.com/aa5a9dc483ad4957af5f71104dc638c2.min.js",
    project: "https://mxm-da.sentry.io/projects/zenbet_mobile_prod/?project=5805672",
  },
]
