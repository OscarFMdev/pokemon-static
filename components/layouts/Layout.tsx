import Head from "next/head"
import { FC, PropsWithChildren } from "react"

export const Layout: FC <PropsWithChildren> = ({ children }) => {
  return (
    <>
    <Head>
      <title>Pokemon App</title>
      <meta name="author" content="Oscar Fernández Muñoz"/>
      <meta name="description" content="___ pokemon info"/>
      <meta name="keywords" content="___, pokemon, pokedex"/>
    </Head>

    {/* NAVBAR */}

    <main>
      { children }
    </main>
    </>
  )
}
