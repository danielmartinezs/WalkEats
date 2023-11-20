'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/RegisterForm';

const register = () => {
  return (
    <div className='sm:flex sm:justify-center md:max-2xl:grid w-full max-w-full min-h-screen grid-cols-2 registerBG'>
      <div className='col-span-1 sm:'/>
      <div className='col-span-1 flex items-center justify-center '>
        <Form />
      </div>
    </div>
  )
}

export default register