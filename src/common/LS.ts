import { getCurrentTab, isExtensionMode, runJS } from "api/chrome"

const getPrefix = () => ""
const currentTab = isExtensionMode() ? ((await getCurrentTab()).id as number) : 0

const set = (key: string, val: any) => {
  const LSKey = getPrefix() + key
  let LSVal
  switch (typeof val) {
    case "object":
    case "boolean":
    case "number":
    case "bigint":
      LSVal = JSON.stringify(val)
      break

    case "string":
      LSVal = val
      break

    default:
      console.error("Invalid value type of the variable stored in localStorage")
      return
  }
  if (isExtensionMode()) {
    chrome.storage.local.set({ [LSKey]: LSVal })
  } else {
    localStorage.setItem(LSKey, LSVal)
  }
}

const get = async (key: string, doParse = true) => {
  const LSKey = getPrefix() + key
  let LSVal: string | null
  try {
    if (isExtensionMode()) {
      // LSVal = await new Promise((resolve, rejects) => {
      //   chrome.storage.local.get([LSKey], result => {
      //     resolve(result[LSKey])
      //   })
      // })
      LSVal = (await runJS(currentTab, () => localStorage.getItem(LSKey))) as unknown as string | null
      console.debug("%c 🚀 -> file: LS.ts:43 -> get -> LSVal:", "background: blue; color: #bada55", LSVal)
    } else {
      LSVal = await Promise.resolve(localStorage.getItem(LSKey))
    }
    if (doParse && LSVal !== null) {
      return JSON.parse(LSVal)
    }
    return LSVal
  } catch (error) {
    console.error(error)
  }
}

const remove = (key: string) => {
  if (isExtensionMode()) {
    chrome.storage.local.remove([key])
  } else {
    localStorage.removeItem(key)
  }
}

export const LS = {
  set,
  get,
  remove,
}
