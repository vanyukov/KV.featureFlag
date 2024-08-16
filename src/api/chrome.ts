export async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export function runJS(tabId: number, func: (...args: any[]) => unknown) {
  // return new Promise((resolve, reject) => {
  //   chrome.tabs.executeScript(tabId, { code }, resultsArray => resolve(resultsArray[0]))
  // })
  return chrome.scripting
    .executeScript({
      target : {tabId, allFrames : true},
      func,
    })
}

export function isExtensionMode() {
  return !!chrome.tabs
}
