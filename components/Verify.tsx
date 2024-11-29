"use client"
import { GetProps, Input } from 'antd'
import React, { SetStateAction, } from 'react'
type OTPProps = GetProps<typeof Input.OTP>;
type VerifyRegisterType =  {
    setRegisterVerify:React.Dispatch<SetStateAction<string>>
}

const Verify:React.FC<VerifyRegisterType> = ({setRegisterVerify}) => {
    const onChange: OTPProps['onChange'] = (text) => {
        setRegisterVerify(text);
      };
    const sharedProps: OTPProps = {onChange}
  return (
    <div className='text-center'>
        <p>Enter code sent to you</p>
        <Input.OTP  size='large' formatter={(str) => str} {...sharedProps} />
    </div>
  )
}

export default Verify
