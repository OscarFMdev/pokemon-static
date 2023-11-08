import {  Navbar,   
          NavbarBrand,   
          NavbarContent,  
          NavbarItem,  
          NavbarMenuToggle, 
          NavbarMenu,  
          NavbarMenuItem,
        } from "@nextui-org/react";
import { useState } from "react";
import Image from 'next/image';


export const NavbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      className="bg-gray-900 flex flex-row items-center justify-start w-full h-10"
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            alt="Ditto"
            width={70}
            height={70}
            />
        </NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      
      <NavbarContent>
        <NavbarBrand>
          <h3 className="text-white text-sm"><span className="text-xl font-bold">P</span>okemon</h3>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem>
          <h4>Favorites</h4>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
