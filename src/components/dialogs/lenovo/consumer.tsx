'use client'

import dynamic from 'next/dynamic'
import { useLenovoDialog } from './store'

const LenovoDialog = dynamic(() => import('./dialog').then((mod) => mod.LenovoDialog), {
  ssr: false,
})

export const LenovoDialogConsumer = () => {
  const open = useLenovoDialog((s) => s.open)
  const setOpen = useLenovoDialog((s) => s.setOpen)

  return open ? <LenovoDialog open={open} setOpen={setOpen} /> : null
}