import { useState } from 'react'

export function useSearchForm(){
    const [form, setForm] = useState({
        propSubType: '',
        size: {
            min: -1,
            max: -1,
        },
        price: {
            min: -1,
            max: -1,
        },
    })
    return {
        propSubType: form.propSubType,
        setPropSubType(propSubType: string) {
            setForm({
                ...form,
                propSubType
            })
        },
        setMinSize(size: number) {
            setForm({
                ...form,
                size: {
                    ...form.size,
                    min: size
                }
            })
        },
        setMaxSize(size: number) {
            setForm({
                ...form,
                size: {
                    ...form.size,
                    max: size
                }
            })
        },
        setMinPrice(size: number) {
            setForm({
                ...form,
                price: {
                    ...form.price,
                    min: size
                }
            })
        },
        setMaxPrice(size: number) {
            setForm({
                ...form,
                price: {
                    ...form.price,
                    max: size
                }
            })
        },
        searchFilterProperties({ sub_types: sub_type, price, size }: PropertyInterface) {
            const formPrice = form.price
            const subType = form.propSubType
            if (subType.length > 0 && sub_type.includes(subType)) {
                return false
            }
            if (formPrice.min > price || formPrice.max > -1 && formPrice.max < price) {
                return false
            }
            const formSize = form.size
            if (formSize.min > size || formSize.max > -1 && formSize.max < size) {
                return false
            }
            return true
        },
    }
}