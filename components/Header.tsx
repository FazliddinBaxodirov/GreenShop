"use client"
import { BasketIcon, LoginIcon, SearchIcon, StickIcon } from '@/public/Images/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'
import { useAxios } from '@/hook/useAxios'
import Verify from './Verify'
import Forgot from './Forgot'
import NewPassword from './NewPassword'
import { Context } from '@/contexxt/Context'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Badge } from 'antd'
import toast from 'react-hot-toast'

const Header = () => {
    const path = usePathname()
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verify" | "forgot" | "newPassword">("login")
    const [show, setShow] = useState<boolean>(false)
    const [registerVerify, setRegisterVerify] = useState<string>("")
    const [registerEmail, setRegisterEmail] = useState<string>('')
    const { setToken,token } = useContext(Context)
    const queryClient = useQueryClient()
    const navigate = useRouter()

    const {data:basketProducts = []} = useQuery({
        queryKey:['basketProducts'],
        queryFn: () => token ? useAxios().get(`/basket`,{
            headers:token ? {"Authorization" : `${token}`} : {},
            params:{
                page:1,
                limit:100
            }
        }).then(res => {
            return res.data}
        ) : []
    })
    console.log(basketProducts);
    
    function handleSumit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin == "login") {
            const data = {
                usernameoremail: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            useAxios().post('/login', data).then(res => {
                setToken(res.data.access_token)
                setLoginModal(false)
                queryClient.invalidateQueries({queryKey:['products']})
                toast.success("You are login to Website")
            })
        }
        else if (isLogin == 'register') {
            setRegisterEmail((e.target as HTMLFormElement).email.value)
            const data = {
                email: (e.target as HTMLFormElement).email.value,
                lastName: (e.target as HTMLFormElement).username.value,
                firstName: (e.target as HTMLFormElement).username.value,
                password: (e.target as HTMLFormElement).password.value
            }
            useAxios().post('/register', data).then(res => {
                setIsLogin('verify')
                toast.success("Code sent to your email")
            }
            )
        }
        else if (isLogin == "verify") {
            const data = {
                email: registerEmail,
                code: registerVerify
            }
            useAxios().post('/users/verify', {}, {
                params: data
            }).then(res => {
                toast.success('Resgistration successfully finished!')
                setIsLogin("login")
            })
        }
        else if (isLogin == "forgot") {
            setRegisterEmail((e.target as HTMLFormElement).email.value)
            useAxios().post(`/forgot/${(e.target as HTMLFormElement).email.value}`, {}).then(res => {
                toast.success("Code sent to your email")
                setIsLogin("newPassword")
            })
        }
        else if (isLogin == "newPassword") {
            const data = {
                email: registerEmail,
                new_password: (e.target as HTMLFormElement).newPassword.value,
                otp: (e.target as HTMLFormElement).otp.value
            }
            useAxios().put("/reset-password", data).then(res => {
                setIsLogin('login')
                toast.success('your password successfully changed!')
            })
        }
    }
    return (
        <header className='flex justify-between border-b-[1px] border-b-[#46A358]/50 pb-[12px]'>
            <Image priority style={{ width: "150px", height: "34px" }} src={'/Logo.svg'} alt='Site Logo' width={150} height={34} />
            <nav className='space-x-[50px]'>
                <Link className={`${path === "/" ? "font-bold border-b-[#46A358]" : "font-normal border-b-transparent"} border-b-[3px] pb-[25px] min-w-[30px] text-4 text-[#3D3D3D] duration-300`} href={'/'}>Home</Link>
                <Link className={`${path.includes('shop')  ? "font-bold border-b-[#46A358]" : "font-normal border-b-transparent"} border-b-[3px] pb-[25px] min-w-[30px] text-4 text-[#3D3D3D] duration-300`} href={'/shop'}>Shop</Link>
                <Link className={`${path === "/plant-care" ? "font-bold border-b-[#46A358]" : "font-normal border-b-transparent"} border-b-[3px] pb-[25px] min-w-[30px] text-4 text-[#3D3D3D] duration-300`} href={'/plant-care'}>Plant Care</Link>
                <Link className={`${path === "/blog" ? "font-bold border-b-[#46A358]" : "font-normal border-b-transparent"} border-b-[3px] pb-[25px] min-w-[30px] text-4 text-[#3D3D3D] duration-300`} href={'/blog'}>Blogs</Link>
            </nav>
            <div className='flex items-center gap-[30px]'>
                <button>
                    <SearchIcon />
                </button>
                <button onClick={() => navigate.push('/shop/shopping-card')}>
                <Badge size="small" showZero count={
                    basketProducts && basketProducts.ProductId ? basketProducts.ProductId.length :
                     0}>
                    <BasketIcon />
                </Badge>
                </button>
                <Button title={`${token  ? "Logined" : "Login"}`} type='button' extraClass='w-[100px] font-medium gap-[4px]' onClick={() => setLoginModal(true)} leftIcon={<LoginIcon />} />
                <Modal openModal={loginModal} setOpenModal={setLoginModal} modalStyle='w-[500px] h-[550px] px-[100px]'>
                    <ul className='flex items-center justify-center mb-[53px] gap-[12px] '>
                        <li onClick={() => setIsLogin("login")} className={`text-[20px]  cursor-pointer duration-150 font-medium ${isLogin == "login" ? 'text-[#46A358]' : 'text-[#3D3D3D]'}`}>Login</li>
                        <li className='pt-[4px]'><StickIcon /></li>
                        <li onClick={() => setIsLogin("register")} className={`text-[20px] font-medium cursor-pointer duration-150 ${isLogin == "register" ? 'text-[#46A358]' : 'text-[#3D3D3D]'}`}>Register</li>
                    </ul>
                    <form onSubmit={handleSumit} autoComplete='off' className='w-full relative flex flex-col gap-[13px]'>
                        {isLogin == "login" && <LoginInputs setIsLogin={setIsLogin} show={show} setShow={setShow} />}
                        {isLogin == "register" && <RegisterInputs setShow={setShow} show={show} />}
                        {isLogin == "verify" && <Verify setRegisterVerify={setRegisterVerify} />}
                        {isLogin == 'forgot' && <Forgot />}
                        {isLogin == 'newPassword' && <NewPassword />}
                        <Button extraClass='mt-[28px]' title={isLogin == 'login' ? "Login" : isLogin == "register" ? "Register" : isLogin == "verify" ? "Submit" : isLogin == 'forgot' ? "Send" : "Channge Password"} type='submit' />
                    </form>
                </Modal>
            </div>
        </header>
    )
}

export default Header
