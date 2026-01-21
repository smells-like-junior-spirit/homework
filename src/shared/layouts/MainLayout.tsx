import stylesMain from './MainLayout.module.css'
import { useTheme } from '../lib/theme/useTheme';
import { Outlet } from 'react-router';

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const MainLayout = () => {

    const { theme } = useTheme() as IThemeContext;

    return (
            <div className={`${stylesMain.main} ${theme === 'light' ? stylesMain.light : stylesMain.dark}`}>
                <Outlet></Outlet>
            </div>
    )
}

export default MainLayout;