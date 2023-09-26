'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/LoginForm';

const login = () => {
  return (
    <div className='w-full max-w-full flex p-3 items-center justify-center bg-orange-300'>
        <Form/>
    </div>
  )
}

export default login