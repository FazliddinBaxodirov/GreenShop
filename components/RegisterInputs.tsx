import React from 'react'
import Input from './Input'
import { ShowIcon } from '@/public/Images/Icons'
import { Showtype } from './LoginInputs'

const RegisterInputs:React.FC<Showtype> = ({setShow,show}) => {
  return (
    <>
    <p className='font-normal text-[13px] text-[#3D3D3D]'>Enter your email and password to register.</p>
      <Input  name='username' placeholder='Username' type='text' inputClass='w-full mb-[3px]'/>
      <Input  name='email' placeholder='Enter your email adress' type='email' inputClass='w-full mb-[3px]'/>
      <Input  name='password' placeholder='Password' type={`${show ? "text" : "password"}`} inputClass='w-full mb-[3px]'/>
      <Input name='checkpassword' placeholder='Confirm Password' type='password' inputClass='w-full'/>
      <button onClick={() => setShow(!show)} className='absolute bottom-[158px] right-[10px]' type='button'><ShowIcon/></button>
    </>
  )
}
export default RegisterInputs
