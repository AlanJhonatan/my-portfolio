'use client'

import dynamic from 'next/dynamic'
import { useSmilesDialog } from './store'

const SmilesDialog = dynamic(() => import('./dialog').then((mod) => mod.SmilesDialog), {
  ssr: false,
})

export const SmilesDialogConsumer = () => {
  const open = useSmilesDialog((s) => s.open)
  const setOpen = useSmilesDialog((s) => s.setOpen)
  
  return open ? <SmilesDialog open={open} setOpen={setOpen} /> : null
}