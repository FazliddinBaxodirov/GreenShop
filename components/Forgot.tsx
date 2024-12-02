import React, { SetStateAction } from 'react'
import Input from './Input'



const Forgot = () => {
    return (
        <>
            <p>Enter your email</p>
            <Input inputClass='mb-[4px]' name='email' placeholder='almamun_uxui@outlook.com' type='email' />
        </>
    )
}

export default Forgot
