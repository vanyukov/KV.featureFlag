import { currentTab, isExtensionMode, runInTab } from "api/chrome"

export const getPathname = async () => {
  let loc = ''
  const func = () => document.location.pathname
  try {
    if (isExtensionMode()) {
      const resTab = (await runInTab(currentTab, func, [])) as unknown as Location | null
      if (Array.isArray(resTab) && resTab.length > 0) {
        loc = resTab[0].result
      } else {
        console.error("can't get location from the active tab")
        loc = ''
      }
    } else {
      loc = await Promise.resolve(document.location.pathname)
    }
    return loc
  } catch (error) {
    console.error(error)
    return await Promise.resolve(loc)
  }
}
