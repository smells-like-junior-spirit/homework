import stylesFooter from './LayoutFooter.module.css'
import { useTheme } from '../../shared/lib/theme/useTheme';

type Theme = 'light' | 'dark';

interface IntThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const LayoutFooter = () => {

    const { theme } = useTheme() as IntThemeContext;

    return (
        <footer className={`${stylesFooter.footer} ${theme === 'light' ? stylesFooter.light : stylesFooter.dark}`}>Homework. Копирование и распространение НЕ преследуется по закону</footer>
    )
}

export default LayoutFooter;