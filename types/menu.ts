import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export interface MenuItem {
  title: string
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps>
  to: string
}
