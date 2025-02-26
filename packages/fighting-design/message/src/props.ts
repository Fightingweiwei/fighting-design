import { setBooleanProp, setStringProp, setNumberProp, setObjectProp } from '../../_utils'
import type { VNode, PropType, ExtractPropTypes } from 'vue'
import type { MessagePlacement } from './interface'
import type { FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /** 唯一值 */
  id: setStringProp(),
  /** 消息文本 */
  message: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): null => null,
    required: true
  },
  /**
   * 消息类型
   *
   * @values default primary success danger warning
   * @defaultValue default
   */
  type: setStringProp<FightingType>('default', (val: FightingType): boolean => {
    return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 显示时间，单位为毫秒。 设为 0 则不会自动关闭 */
  duration: setNumberProp(3000),
  /** 是否为圆角类型 */
  round: setBooleanProp(),
  /** 消息 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 字体颜色 */
  color: setStringProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 偏移距离 */
  offset: setNumberProp(20),
  /**
   * 位置
   *
   * @values top top-left top-right bottom bottom-left bottom-right
   * @defaultValue top
   */
  placement: setStringProp<MessagePlacement>('top', (val: MessagePlacement): boolean => {
    return (['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'] as const).includes(val)
  }),
  /** 层级 */
  zIndex: setNumberProp(),
  /** 关闭按钮 */
  closeBtn: {
    type: [String, Object] as PropType<string | VNode>,
    default: (): null => null
  },
  /** 关闭回调 */
  onClose: {
    type: Function,
    default: (): null => null
  }
} as const

export type MessageProps = ExtractPropTypes<typeof Props>
