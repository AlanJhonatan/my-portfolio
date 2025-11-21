import { create } from 'zustand'

export interface SmilesDialogState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useSmilesDialog = create<SmilesDialogState>()((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}))