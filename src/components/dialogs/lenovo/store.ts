import { create } from 'zustand'

export interface LenovoDialogState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useLenovoDialog = create<LenovoDialogState>()((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}))