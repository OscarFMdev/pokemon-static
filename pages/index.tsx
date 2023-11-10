import { GetStaticProps } from 'next'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Layout } from '@/components/layouts'
import { Inter } from 'next/font/google'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
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
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {pokemons.map(({id, name, img}) => (
              <Card key={id} className="p-10 gap-4 cursor-pointer" isHoverable>
                <li className="justify-around items-center">
                  <CardHeader>
                    <p>#{id} - {name}</p>
                  </CardHeader>
                  <CardBody>
                    <Image height={270} width={270} src={img} alt={name} loading="lazy" isBlurred isZoomed />
                  </CardBody>
                </li>
              </Card>
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
