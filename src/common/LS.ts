import { currentTab, isExtensionMode, runInTab } from "api/chrome"

const getPrefix = () => ""

const set = async (key: string, val: unknown) => {
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
    const func = (key: string, val: string) => localStorage.setItem(key, val)
    const resTab = (await runInTab(currentTab, func, [LSKey, LSVal])) as unknown as string | null
    if (!Array.isArray(resTab) && resTab?.length === 0) {
      console.error("LS can't set data from the active tab")
    }
  } else {
    localStorage.setItem(LSKey, LSVal)
  }
}

const get = async (key: string, doParse = true) => {
  const LSKey = getPrefix() + key
  let LSVal: string | null
  try {
    if (isExtensionMode()) {
      const func = (key: string) => localStorage.getItem(key)
      const resTab = (await runInTab(currentTab, func, [LSKey])) as unknown as string | null
      if (Array.isArray(resTab) && resTab.length > 0) {
        LSVal = resTab[0].result
      } else {
        console.error("LS can't get data from the active tab")
        LSVal = null
      }
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

const remove = async (key: string) => {
  if (isExtensionMode()) {
    const func = (key: string) => localStorage.removeItem(key)
    const resTab = (await runInTab(currentTab, func, [key])) as unknown as string | null
    if (!Array.isArray(resTab) && resTab?.length === 0) {
      console.error("LS can't remove data from the active tab")
    }
  } else {
    localStorage.removeItem(key)
  }
}

export const LS = {
  set,
  get,
  remove,
}
