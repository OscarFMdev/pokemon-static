// components/ThemeSwitcher.tsx
import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div>
      <Button color="primary" onClick={handleChange}>
        Change
      </Button>
    </div>
  )
};