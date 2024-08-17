import { currentTab, isExtensionMode, runInTab } from "api/chrome"

export const runError = async (errorText: string, addDate: boolean, countError: number) => {
  const func = (errorText: string, addDate: boolean, countError: number) => {
    for (let i = 0; i < countError; i++) {
      setTimeout(() => {
        throw new Error(errorText + (addDate ? ": " + new Date().toLocaleString() : ""))
      }, i * 1000)
    }
  }
  if (isExtensionMode()) {
    const resTab = (await runInTab(currentTab, func, [errorText, addDate, countError])) as unknown as string | null
    if (!Array.isArray(resTab) && resTab?.length === 0) {
      console.error("LS can't set data from the active tab")
    }
  } else {
    func(errorText, addDate, countError)
  }
}
