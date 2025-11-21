import { create } from 'zustand'

export interface SeipDialogState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useSeipDialog = create<SeipDialogState>()((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}))