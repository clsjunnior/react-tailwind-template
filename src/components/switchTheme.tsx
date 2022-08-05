import { useCallback, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export function SwitchTheme() {
  const [enabled, setEnabled] = useState(false)

  const changeTheme = useCallback(
    (isEnable: boolean) => {
      setEnabled(isEnable)
      document.querySelector('html')?.classList.toggle('dark')
      saveTheme(isEnable ? 'dark' : 'light')
    },
    [setEnabled]
  )

  const saveTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
      setEnabled(true)
    } else {
      document.querySelector('html')?.classList.remove('dark')
      setEnabled(false)
    }
  }, [])

  return (
    <div className="flex gap-4 items-center">
      <span className="text-sm dark:text-gray-100">Change Theme</span>
      <Switch
        checked={enabled}
        onChange={() => changeTheme(!enabled)}
        className={`${
          enabled ? 'bg-cyan-500' : 'bg-gray-600'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-gray-100`}
        />
      </Switch>
    </div>
  )
}
