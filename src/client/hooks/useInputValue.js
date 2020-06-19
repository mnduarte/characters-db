import { useState } from 'react'

export const useInputValue = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => {
        //console.log(e)    
        return setValue(e ? e.target.value : '')
    }
    
    

    return { value, onChange}
}