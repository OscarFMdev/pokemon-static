// components/ThemeSwitcher.tsx
import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useState } from "react";
import {BsSunFill, BsFillMoonFill} from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState();

  
  const handleChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  
  return (
    <div>
      <Button color="secondary" onClick={handleChange} isIconOnly>
        {theme === "dark" ? <BsSunFill /> : <BsFillMoonFill />}
      </Button>
    </div>
  )
};