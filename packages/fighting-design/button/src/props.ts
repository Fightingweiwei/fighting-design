import { setBooleanProp, setStringNumberProp, setStringProp, setObjectProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { ButtonTarget, ButtonNative } from './interface'
import type { FightingSize, FightingType, FightingIcon, HandleMouse } from '../../_interface'

export const Props = {
  /** 是否加粗 */
  bold: setBooleanProp(),
  /** 是否为圆形 */
  circle: setBooleanProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 是否带有扩散效果 */
  spread: setBooleanProp(),
  /** 文字大小 */
  fontSize: setStringNumberProp(),
  /** 字体颜色 */
  fontColor: setStringProp(),
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   * @defaultValue null
   */
  size: setStringProp<FightingSize>(null, (val: FightingSize): boolean => {
    return (['large', 'middle', 'small', 'mini'] as const).includes(val)
  }),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /** 跳转的连接地址 */
  href: setStringProp(),
  /**
   * 针对 href 处理的跳转方式
   *
   * 原生属性
   *
   * @values _blank _self _parent _top
   * @defaultValue _self
   * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: setStringProp<ButtonTarget>('_self', (val: ButtonTarget): boolean => {
    return (['_blank', '_self', '_parent', '_top'] as const).includes(val)
  }),
  /** 是否为 loading 状态 */
  loading: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义 loading icon */
  loadingIcon: setObjectProp<FightingIcon>(),
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning
   * @defaultValue null
   */
  type: setStringProp<FightingType>(null, (val: FightingType): boolean => {
    return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /** 是否自动获取焦点 */
  autofocus: setBooleanProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-name
   */
  name: setStringProp<string>('f-button'),
  /** 自定义阴影样式 */
  shadow: setStringProp(),
  /** 是否为文字按钮（非自定义按钮颜色时有效） */
  text: setBooleanProp(),
  /**
   * 原生 type 属性
   *
   * @values button submit reset
   * @defaultValue button
   * @see type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type
   */
  nativeType: setStringProp<ButtonNative>('button', (val: ButtonNative): boolean => {
    return (['button', 'submit', 'reset'] as const).includes(val)
  }),
  /** 是否为简约的按钮（非自定义按钮颜色时有效） */
  simple: setBooleanProp(),
  /** 自定义之前的 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 自定义之后的 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /** 是否为涟漪效果 */
  ripples: setBooleanProp(),
  /** 自定义涟漪效果颜色 */
  ripplesColor: setStringProp(),
  /** 自定义按钮颜色 */
  color: setStringProp(),
  /** 点击之后的回调函数 */
  onClick: setFunctionProp<HandleMouse>()
} as const

export type ButtonProps = ExtractPropTypes<typeof Props>
