import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { ThemeSwitcher } from '../ThemeSwitcher';
import Link from 'next/link';

export const NavbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['favorites']; // Add more menu items as needed

  return (
    <Navbar
      className="flex flex-row items-center justify-start w-full h-10"
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
            width={70}
            height={70}
          />
          <h3>
            <span className="text-xl font-bold">P</span>okemon
          </h3>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={`/${item}`}>
              <h4 className="capitalize">{item}</h4>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <ThemeSwitcher />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={`/${item}`}>
              <h4 className="capitalize">{item}</h4>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
