export function parseStringAsHTML(htmlString: string): HTMLElement {
  const wrapperEl = document.createElement('span');
  wrapperEl.innerHTML = htmlString;
  return wrapperEl;
}
