import { create } from "zustand"

type authUserState = {
  loged: boolean
  toggleLoged: () => void
}

export const useUserStore = create<authUserState>((set) => ({
    loged: true,
    toggleLoged: () => set((state) => ({ loged: !state.loged })),
}))

