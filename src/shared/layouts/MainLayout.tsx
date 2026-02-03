import stylesMain from './MainLayout.module.css'
import { useTheme } from '../lib/theme/useTheme';
import { Outlet } from 'react-router';

const MainLayout = () => {

    const { theme } = useTheme();

    return (
            <div className={`${stylesMain.main} ${theme === 'light' ? stylesMain.light : stylesMain.dark}`}>
                <Outlet></Outlet>
            </div>
    )
}

export default MainLayout;