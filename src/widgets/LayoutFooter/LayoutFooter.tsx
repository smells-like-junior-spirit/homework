import stylesFooter from './LayoutFooter.module.css'
import { useTheme } from '../../shared/lib/theme/useTheme';

const LayoutFooter = () => {

    const { theme } = useTheme();

    return (
        <footer className={`${stylesFooter.footer} ${theme === 'light' ? stylesFooter.light : stylesFooter.dark}`}>Homework. Копирование и распространение НЕ преследуется по закону</footer>
    )
}

export default LayoutFooter;