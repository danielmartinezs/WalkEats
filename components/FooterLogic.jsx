'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Footer from "@components/Footer"
const FooterLogic = () => {
  const url = usePathname()

  return (
    <>
      {url === '/' ?
        <>

        </> :
        <>
          <Footer />
        </>}
    </>
  )
}

export default FooterLogic