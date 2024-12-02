"use client"
import Button from '@/components/Button'
import { Context } from '@/contexxt/Context'
import React, { useContext, useState } from 'react'
import InputRange from 'react-input-range'

const PriceFilter = () => {
    const [value, setValue] = useState({ min: 25, max: 500 })
    const { setMaxPrice, setMinPrice } = useContext(Context)

    function handleChangeRange(value: { min: number, max: number } | any) {
        setValue(value)
    }

    function handleFilter() {
        setMinPrice(value.min)
        setMaxPrice(value.max)
    }

    return (
        <div>
            <InputRange
                value={value}
                maxValue={1000}
                minValue={0}
                onChange={handleChangeRange}
            />
            <Button
                onClick={handleFilter}
                title="Filter"
                type="button"
                extraClass="w-[90px] mt-[30px]"
            />
        </div>
    )
}

export default PriceFilter