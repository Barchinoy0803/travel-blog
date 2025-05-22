import React from 'react'
import { GiWorld } from "react-icons/gi";

const Header = () => {
  return (
    <header className='bg-slate-800'>
      <nav className='container mx-auto p-6 text-white text-[30px] flex items-center gap-1'>
        <GiWorld />
        <p>Travel Blog</p>
      </nav>
    </header>
  )
}

export default React.memo(Header)