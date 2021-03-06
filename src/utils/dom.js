/**
 * @author clearaki
 * @description 在dom中插入一个容器，用于计算某些不显示的dom高度
 * @export {Function}
 * @returns {Element} container
 */
export function constructorContainer() {
  if (document.getElementById('aki-dom-container')) return false
  const container = document.createElement('div')
  container.id = 'aki-dom-container'
  container.style.position = 'fixed'
  container.style.top = '100vh'
  container.style.left = '100vw'
  // container.style.width = 0
  // container.style.height = 0
  container.style.overflow = 'hidden'
  document.body.appendChild(container)
  return container
}
/**
 * @author clearaki
 * @description 获取dom正常渲染后的实际的Rect
 * @export {Function}
 * @param {Element} el 一个Node节点
 * @returns {Object} DOMRect
 */
export function getDOMRect(el) {
  const container = document.getElementById('aki-dom-container') || constructorContainer()
  container.innerHTML = ''
  el.style.height = 'auto'
  el.style.maxHeight = 'initial'
  el.style.visibility = 'visible'
  el.style.display = 'initial'
  container.appendChild(el)
  return el.getBoundingClientRect()
}