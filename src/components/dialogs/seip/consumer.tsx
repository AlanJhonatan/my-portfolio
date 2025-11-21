'use client'

import dynamic from 'next/dynamic'
import { useSeipDialog } from './store'

const SeipDialog = dynamic(() => import('./dialog').then((mod) => mod.SeipDialog), {
  ssr: false,
})

export const SeipDialogConsumer = () => {
  const open = useSeipDialog((s) => s.open)
  const setOpen = useSeipDialog((s) => s.setOpen)

  return open ? <SeipDialog open={open} setOpen={setOpen} /> : null
}