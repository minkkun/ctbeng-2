import React from 'react'
import { Roboto } from 'next/font/google'

type Props = {}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left: Company name */}
          <span className="font-bold">
            PHUONG DONG OFFSHORE ENGINEERING JSC (CTB ENG)
          </span>

        </div>
      </div>
    </div>
  )
}

export default TopNav