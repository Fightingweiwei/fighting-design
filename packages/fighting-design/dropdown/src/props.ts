import { setBooleanProp, setStringNumberProp, setNumberProp, setStringProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TriggerTrigger } from '../../trigger'
import type { HandleChange } from '../../_interface'

export const Props = {
  /** 触发器和内容直接的间距 */
  spacing: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 触发方式：移入、点击
   *
   * @values hover click
   * @defaultValue hover
   */
  trigger: setStringProp<TriggerTrigger>('hover', (val: TriggerTrigger): boolean => {
    return (['hover', 'click'] as const).includes(val)
  }),
  /** 是否带有箭头 */
  arrow: setBooleanProp(),
  /** 弹出动画持续时间 */
  enterDuration: setNumberProp(),
  /** 关闭动画持续时间 */
  leaveDuration: setNumberProp(),
  /** 弹窗状态改变时触发的回调 */
  onChange: setFunctionProp<HandleChange>(),
  /** 弹窗状态打开时触发的回调 */
  onOpen: setFunctionProp<HandleChange>(),
  /** 弹窗状态关闭时触发的回调 */
  onClose: setFunctionProp<HandleChange>()
} as const

export type DropdownProps = ExtractPropTypes<typeof Props>
