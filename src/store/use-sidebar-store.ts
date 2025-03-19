import { create } from "zustand"

type SidebarState = {
  collapsed: boolean
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: false,
  toggleSidebar: () => set((state) => ({ collapsed: !state.collapsed })),
  setSidebarCollapsed: (collapsed) => set({ collapsed }),
}))

