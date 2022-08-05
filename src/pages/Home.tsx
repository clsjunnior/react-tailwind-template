import reactLogo from '../assets/react.svg'
import tailwindLogo from '../assets/tailwind.svg'
import { SwitchTheme } from '../components/switchTheme'

export function Home() {
  return (
    <div className="flex min-h-screen dark:bg-gray-800">
      <div className="w-full max-w-[1100px] p-10 mx-auto flex flex-col items-center justify-between">
        <div className="gap-6 text-center dark:text-gray-100">
          <h1 className="text-3xl font-bold">Template</h1>
          <h3 className="text-2xl">React + Tailwind CSS</h3>
        </div>
        <div className="flex gap-8">
          <img src={reactLogo} alt="React Logo" className="w-32" />
          <img src={tailwindLogo} alt="Tailwind Logo" className="w-32" />
        </div>
        <div className="flex gap-8">
          <SwitchTheme />
        </div>
      </div>
    </div>
  )
}
