import { SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React from 'react'

interface Props {
  pokemon: SmallPokemon;
}


const PokemonCard = ({pokemon}: Props) => {
  const { img, name, id} = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`)
  };

  return (
    <Card 
      key={id} 
      className="p-10 gap-4 cursor-pointer"
      isHoverable 
      isPressable
      onClick={onClick}
    >
      <li className="justify-around items-center">
        <CardBody>
          <Image height={270} width={270} src={img} alt={name} loading="lazy" isBlurred isZoomed />
        </CardBody>
        <CardFooter className='flex justify-between' >
          <p className='capitalize'>{name}</p>
          <p>#{id}</p>
        </CardFooter>
      </li>
    </Card>
  )
}

export default PokemonCard