"use client";
import React from 'react'
import { Footer } from 'flowbite-react'

const Footers = () => {
  return (
    <Footer 
    className='bg-cyan-100 rounded-none' 
    container>
      <Footer.Brand
        alt="Logo"
        href="/"
        name="WalkEats"
        src="/assets/LogoNew.jpg"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          Acerca
        </Footer.Link>
        <Footer.Link href="#">
          Política de Prvacidad
        </Footer.Link>
        <Footer.Link href="#">
          Términos
        </Footer.Link>
        <Footer.Link href="#">
          Contacto
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default Footers