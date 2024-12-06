"use client"
import { Context } from '@/contexxt/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { SetStateAction, useContext } from 'react'

interface CategoryType {
    category_id: string
    category_name: string
}

const Categories = () => {
    const { setCategory } = useContext(Context)
    const { data: categories = [] } = useQuery(({
        queryKey: ['categories'],
        queryFn: () => useAxios().get('categories', {
            params: { page: 1, limit: 100 }
        }).then(res => res.data.categories),
        enabled: true
    }))
    return (
        <div style={{ marginBottom: "40px" }}>
            {
                categories.map((item: CategoryType) => <p onClick={() => setCategory(item.category_name)} className='categorytext' key={item.category_id}>{item.category_name}</p>)
            }
        </div>
    )
}

export default Categories