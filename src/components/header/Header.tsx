import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='border-b bg-[#ffffff] w-full px-7 py-3 border-b-[#eeeeee]'>
        <Image src="https://i.imgur.com/jclBvaQ.png" className='w-[50px] border' width={150} height={150} alt='logo' />
    </header>
  )
}
