import { GetStaticProps } from 'next'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Layout } from '@/components/layouts'
import { Inter } from 'next/font/google'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[];
}


export default function HomePage({ pokemons }: Props) {
  console.log(pokemons[0]);
  return (
    <>
      <Layout title='Pokemon List'>
        <>
          <ThemeSwitcher />
          <ul>
            {pokemons.map(({id, name}) => (
              <li key={id}>
                <p>#{id} - {name}</p>
              </li>
            ))}
          </ul>
        </>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png"`
  }))

  return {
    props: {
      pokemons
    }
  }
}
