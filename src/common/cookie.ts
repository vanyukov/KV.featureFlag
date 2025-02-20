import { currentTab, isExtensionMode, runInTab } from "api/chrome"

export const getCookieValue = async (name: string) => {
  let tabVal: string | null
  const func = (name: string) =>
    document.cookie
      .split("; ")
      .find(row => row.startsWith(name))
      ?.split("=")[1]
  try {
    if (isExtensionMode()) {
      const resTab = (await runInTab(currentTab, func, [name])) as unknown as string | null
      if (Array.isArray(resTab) && resTab.length > 0) {
        tabVal = resTab[0].result
      } else {
        console.error("can't get cookie from the active tab")
        tabVal = null
      }
    } else {
      tabVal = await Promise.resolve(func(name) || null)
    }
    return tabVal
  } catch (error) {
    console.error(error)
  }
}
