import React from 'react'
import { Sattvalogo } from '@/components/Sattvalogo'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="flex justify-center py-4 -mb-28 ">
    <Sattvalogo className="z-10 h-20 cursor-pointer text-[#000000]" />
    </header>

  )
}