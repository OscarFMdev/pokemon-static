import { GetStaticProps } from 'next'
import { Layout } from '@/components/layouts'
import { Inter } from 'next/font/google'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { PokemonCard } from '@/components/pokemon'
const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[];
}


export default function HomePage({ pokemons }: Props) {
  return (
    <>
      <Layout title='Pokemon List'>
        <>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5'>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}
