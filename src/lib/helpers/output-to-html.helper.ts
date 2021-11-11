export function outputToHTML(htmlString: string): HTMLElement {
  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = htmlString;
  return wrapperEl;
}
