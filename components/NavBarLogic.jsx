'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from "@components/Navbar"

const NavBarLogic = () => {
    const url = usePathname()

  return (
    <>
                 {url === '/' ?
              <>

              </> :
              <>
                <Navbar />
              </>}   
    </>
  )
}

export default NavBarLogic