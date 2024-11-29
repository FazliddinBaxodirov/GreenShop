import React, { SetStateAction } from 'react'
import Input from './Input'
import { ShowIcon } from '@/public/Images/Icons'

export  interface Showtype{
    show:boolean
    setShow:React.Dispatch<SetStateAction<boolean>>
}

const LoginInputs:React.FC<Showtype> = ({show,setShow}) => {
    return (
        <>
            <p className='font-normal text-[13px] text-[#3D3D3D]'>Enter your username and password to login.</p>
            <Input inputClass='mb-[4px]' name='email' placeholder='almamun_uxui@outlook.com' type='email' />
            <Input name='password' placeholder='***********' type={`${show ? "text" : "password"}`} />
            <button onClick={() => setShow(!show)} className='absolute bottom-[127px] right-[10px]' type='button'><ShowIcon /></button>
            <p className='text-[#46A358] text-[14px] font-normal text-end'>Forgot password ?</p>
        </>
    )
}

export default LoginInputs
