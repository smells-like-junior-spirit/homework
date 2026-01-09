import { useEffect } from "react";
import { useTheme } from "../../shared/lib/theme/useTheme";
import Button from "../../shared/ui/Button/Button";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark' : '';
    }, [theme]);
    
    return (
        <Button
            onClickHandler={toggleTheme}
            value={theme === 'light' ? 'Темная тема' : 'Светлая тема'}
            variant={theme === 'light' ? 'light' : 'dark'}>
        </Button>
    )
}

export default ThemeSwitcher;