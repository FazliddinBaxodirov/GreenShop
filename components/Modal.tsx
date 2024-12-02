import { CloseIcon } from '@/public/Images/Icons'
import React, { ReactNode, SetStateAction } from 'react'

interface ModalType {
    children: ReactNode
    openModal: boolean
    setOpenModal: React.Dispatch<SetStateAction<boolean>>
    modalStyle?: string
}

const Modal: React.FC<ModalType> = ({ children, openModal, setOpenModal, modalStyle }) => {
    return (
        <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => (e.target as HTMLDivElement).id == "wrapper" ? setOpenModal(false) : ''} id='wrapper' className={`fixed z-50 flex inset-0 justify-center items-center duration-300 h-screen bg-[#000]/30 ${openModal !== true && 'scale-0'}`}>
            <div className={`${modalStyle} relative bg-white pt-[62px] pb-[50px]`}>
                <button className='absolute top-[12px] right-[12px]' onClick={() => setOpenModal(false)}><CloseIcon/></button>
                {children}
            </div>
        </div>
    )
}

export default Modal
