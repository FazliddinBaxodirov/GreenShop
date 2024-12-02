import React from 'react'
import Input from './Input'

const NewPassword = () => {
    return (
        <>
            <Input inputClass='mb-[4px]' name='newPassword' placeholder='Enter new password' type='password'/>
            <Input inputClass='mb-[4px]' name='otp' placeholder='Enter code' type='text'/>
        </>
    )
}

export default NewPassword
