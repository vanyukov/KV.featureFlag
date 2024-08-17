export async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export function runInTab(tabId: number, func: (...args: never[]) => unknown, args: unknown[]) {
  return chrome.scripting
    .executeScript({
      target : {tabId, allFrames : true},
      func,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      args,
    })
}

export function isExtensionMode() {
  return !!chrome.tabs
}
