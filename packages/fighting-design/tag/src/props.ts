import { setBooleanProp, setStringProp, setObjectProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleEvent, FightingType, FightingSize, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * 标签类型
   *
   * @values default primary success danger warning
   * @defaultValue default
   */
  type: setStringProp<FightingType>('default', (val: FightingType): boolean => {
    return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义文字颜色 */
  color: setStringProp(),
  /** 左侧 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 右侧 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return (['large', 'middle', 'small', 'mini'] as const).includes(val)
  }),
  /** 是否为简约模式 */
  simple: setBooleanProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /** 线性的 */
  line: setBooleanProp(),
  /** 点击关闭按钮触发 */
  onClose: setFunctionProp<HandleEvent>()
} as const

export type TagProps = ExtractPropTypes<typeof Props>
