import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
    </>
  )
}
