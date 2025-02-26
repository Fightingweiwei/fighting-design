import { setBooleanProp, setStringProp, setStringNumberProp, setObjectProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { LinkTarget, LinkState } from './interface'
import type { HandleEvent, FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * link 的类型
   *
   * @values default primary success danger warning
   * @defaultValue null
   */
  type: setStringProp<FightingType>(null, (val: FightingType): boolean => {
    return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /**
   * 链接的地址
   *
   * @see href https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a?qs=%3Ca%3E#attr-href
   */
  href: setStringProp(),
  /** 的文字大小 */
  size: setStringNumberProp(),
  /**
   * 状态的样式状态
   *
   * @values line bag
   * @defaultValue null
   */
  state: setStringProp<LinkState>(null, (val: LinkState): boolean => {
    return (['line', 'bag'] as const).includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 原生 target 属性
   *
   * @values _blank _self _parent _top
   * @defaultValue _self
   * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: setStringProp<LinkTarget>('_self', (val: LinkTarget): boolean => {
    return (['_self', '_blank', '_parent', '_top'] as const).includes(val)
  }),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 是否禁止 copy */
  noCopy: setBooleanProp(),
  /** 是否禁止链接跳转及重新加载（取消默认事件） */
  noLink: setBooleanProp(),
  /** 之前的 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 之后的 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /** 点击执行的回调 */
  onClick: setFunctionProp<HandleEvent>()
} as const

export type LinkProps = ExtractPropTypes<typeof Props>
