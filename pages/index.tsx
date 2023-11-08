import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <ThemeSwitcher />
      <h1>
        Hello world!
      </h1>

      <Button variant='shadow' className="bg-gradient-to-r from-purple-800 to-blue-500 text-white shadow-lg">Test</Button>
    </>
  )
}
