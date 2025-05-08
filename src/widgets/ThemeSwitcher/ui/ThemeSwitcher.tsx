import React, {FC} from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import LightIcon from 'shared/assets/theme-light.svg';
import DarkIcon from 'shared/assets/theme-dark.svg';
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return <Button 
    theme={ThemeButton.CLEAR}
    className={classNames(cls.ThemeSwitcher, {}, [className])} 
    onClick={toggleTheme}
  >
    {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
  </Button>
}