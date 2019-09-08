export interface SidebarMenuItem {
  // 标签名称
  label: string

  // 图标名称
  icon?: string

  // 路由名称
  name: string

  // 排序
  order: number
}

export interface ActionBarMenuItem {
  // 图标名称
  name: string

  // 图标大小
  size: number

  // 功能名称
  action: string

  // 末尾是否有分割线
  divider?: boolean

  // 路由
  route?: object
}
