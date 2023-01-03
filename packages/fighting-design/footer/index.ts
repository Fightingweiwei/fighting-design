import Footer from './src/footer.vue'

import { install } from '../_utils'

export const FFooter = install(Footer)

export type FooterInstance = InstanceType<typeof Footer>

export * from './src/interface.d'

export default FFooter
