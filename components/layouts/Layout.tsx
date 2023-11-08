import Head from "next/head"
import { FC } from "react"
import { NavbarContainer } from '../ui/Navbar';
interface Props  {
  children: JSX.Element;
  title?: string;
}

export const Layout: FC <Props> = ({ children, title }) => {
  return (
    <>
    <Head>
      <title>{title || 'Pokemon App'}</title>
      <meta name="author" content="Oscar Fernández Muñoz"/>
      <meta name="description" content={`${ title } pokemon info`}/>
      <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
    </Head>

    <NavbarContainer />

    <main style={{
      padding: '0px 20px'
    }}>
      { children }
    </main>
    </>
  )
}
