import { useState } from 'react'

// custom hook that retrieves local storage value and assigns it to state
const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue
  )
  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setLocalStorageValue(value)
  }
  return [localStorageValue, setItem]
}

export default useLocalStorage
