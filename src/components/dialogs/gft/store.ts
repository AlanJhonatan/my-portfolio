import { create } from 'zustand'

export interface GFTDialogState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useGFTDialog = create<GFTDialogState>()((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}))