import { useEffect, useState } from 'react'

const UseLocalStorage = ({key, initialValue}) => {
    const [value, setValue] = useState(() => {
        try {
            const jsonValue = localStorage.getItem(key);
            return jsonValue ? JSON.parse(jsonValue) : initialValue;
        } catch (err) {
            console.error('Error parsing JSON from localStorage:', err);
            return initialValue
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key , JSON.stringify(value))
        } catch(err){
            console.error('Error stringifying value to JSON for localStorage:', err);
        }
    }, [key, value])
  return [value, setValue]
}

export default UseLocalStorage