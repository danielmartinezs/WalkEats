'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/RegisterForm';

const register = () => {
  return (
    <div className='w-full max-w-full min-h-screen grid grid-cols-2 registerBG'>
      <div className='col-span-1'>

      </div>
      <div className='col-span-1 flex items-center justify-center '>
        <Form />
      </div>
    </div>
  )
}

export default register