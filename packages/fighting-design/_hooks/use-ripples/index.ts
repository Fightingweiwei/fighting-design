import { computed } from 'vue'
import type { RipplesOptions, UseRipplesReturn, RipplesEvt } from './interface'

export * from './interface.d'

/**
 * 是否为第一次点击
 * 
 * 控制只创建一次容器盒子
 */
let firstClick = true

/**
 * 点击的涟漪效果
 *  
 * @param evt 事件对象
 * @param node 元素节点
 * @param options 配置对象
 */
export const useRipples = (evt: MouseEvent, node: HTMLButtonElement, options: RipplesOptions): UseRipplesReturn => {

  /**
   * 防止涟漪效果溢出
   * 
   * 给按钮组件单独添加一个容器
   * 
   * 因为按钮组件还有 spread 的扩散效果
   * 
   * 所以不能直接在元素上设置 overflow: hidden
   * 
   * 才使用这个方法来限制
   */
  if (options.component === 'f-button' && firstClick) {
    const box: HTMLDivElement = document.createElement('div')
    box.className = 'f-button__ripples-box'
    node.appendChild(box)
    firstClick = false
  }

  /**
   * 计算涟漪颜色
   *
   * 如果设置了 ripplesColor 则直接返回
   * 
   * 在 simple 和 text 模式下，根据 type 返回颜色
   * 
   * 否则返回默认白色
   */
  const ripplesColor = computed((): string => {

    if (options.ripplesColor) {
      return options.ripplesColor
    }

    const COLOR_LIST = {
      default: '#f0f0f0',
      primary: '#2d5af1',
      success: '#52b35e',
      danger: '#ff0200',
      warning: '#fcc202'
    } as const

    /**
     * 如果是按钮组件
     *
     * 如果 simple, text 存在其中一个，那么就返回指定的色号，否则返回空字符串
     */
    if (options.component === 'f-button') {
      const { simple, text } = options

      return simple || text ? COLOR_LIST[options.type] : ''
    }

    // 如果不是按钮组件，则可以直接返回指定色号
    return COLOR_LIST[options.type]
  })

  /**
   * 删除涟漪节点
   *
   * @param node dom 元素
   */
  const removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      node.remove()
    }, options.duration || 400)
  }

  /**
   * 渲染节点
   *
   * @param x 坐标 x
   * @param y 坐标 y
   * @return { HTMLSpanElement }
   */
  const renderElement = (x: number, y: number): HTMLSpanElement => {
    /**
     * 新建个 span 元素
     */
    const ripples: HTMLSpanElement = document.createElement('span') as HTMLSpanElement

    ripples.className = options.className
    ripples.style.background = ripplesColor.value
    ripples.style.left = `${x}px`

    // 只有在按钮组件的时候，才作用 y 轴的坐标
    if (options.component === 'f-button') {
      ripples.style.top = `${y}px`
    }

    return ripples
  }

  /**
   * 点击生成涟漪效果
   */
  const runRipples = (): void => {
    /**
     * clientX clientY 可获取到点击相对于页面的坐标
     *
     * 其它写法
     * const x: number = this.evt.clientX - (this.evt.target as HTMLElement).offsetLeft
     * const y: number = this.evt.clientY - (this.evt.target as HTMLElement).offsetTop
     *
     * @see clientX https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
     * @see clientY https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
     */
    const { layerX, layerY } = evt as unknown as RipplesEvt

    const ripples: HTMLSpanElement = renderElement(layerX, layerY)

    options.component === 'f-button'
      ? (node.querySelector('.f-button__ripples-box') as HTMLDivElement).appendChild(ripples)
      : node.appendChild(ripples)

    removeElement(ripples)
  }

  return {
    runRipples
  }
}
