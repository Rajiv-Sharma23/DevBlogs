import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center  p-4'>
      <SignIn signUpUrl='/register'/>
    </div>
  )
}

export default LoginPage