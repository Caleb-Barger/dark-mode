import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (key, initalValue) => {
  const [value, setValue] = useLocalStorage(key, initalValue)

  const toggleMode = e => {
    e.preventDefault()
    setValue(!value)
  }

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark-mode")
    }
    else {
      document.body.classList.remove("dark-mode")
    }
  }, [value])

  return [value, toggleMode]
}