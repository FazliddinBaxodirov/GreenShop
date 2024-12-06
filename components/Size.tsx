import { Context } from '@/contexxt/Context'
import React, { useContext } from 'react'

interface sizeType {
  title: string,
  id: string,
  path:string
}

const Size = () => {
  const {setSize} = useContext(Context)
  const sizeList = [
    {
      id: "1",
      title: "Small",
      path:"Small"
    },
    {
      id: "2",
      title: "Medium",
      path:"Medium"
    },
    {
      id: "3",
      title: "Large",
      path:"Large"
    }
  ]
  return (
    <div className='pb-[20px]'>
      {sizeList.map((item: sizeType) => <p onClick={() => setSize(item.path) } className='ml-[12px] cursor-pointer font-normal text-[15px] text-[#3D3D3D] leading-[40px]' key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default Size
