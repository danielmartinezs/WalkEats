'use client';
import Image from 'next/image';
import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/LoginForm';

const login = () => {
  return (
    <div className='w-full max-w-full min-h-screen grid grid-cols-2 loginBG'>
      <div className='col-span-1 flex items-center justify-center'>
        <Image
          src="/assets/LogoNew.jpg"
          alt="WalkEats logo"
          width={180}
          height={180}
          className='sm:block hidden rounded-2xl' />
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <Form />
      </div>
    </div>
  )
}

export default login