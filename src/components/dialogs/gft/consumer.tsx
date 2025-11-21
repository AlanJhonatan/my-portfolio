'use client'

import dynamic from 'next/dynamic'
import { useGFTDialog } from './store'

const GFTDialog = dynamic(() => import('./dialog').then((mod) => mod.GFTDialog), {
  ssr: false,
})

export const GFTDialogConsumer = () => {
  const open = useGFTDialog((s) => s.open)
  const setOpen = useGFTDialog((s) => s.setOpen)

  return open ? <GFTDialog open={open} setOpen={setOpen} /> : null
}