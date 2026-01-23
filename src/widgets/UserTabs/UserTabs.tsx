import { useTheme } from '../../shared/lib/theme/useTheme';
import { useParams } from 'react-router';
import { NavLink } from 'react-router';
import styles from './UserTabs.module.css'

const UserTabs = () => {

    const { theme } = useTheme();
    const { id } = useParams();

    return (
        <nav className={`${styles.tabs} ${theme === 'light' ? styles.light : styles.dark}`}>
            <NavLink to={`/users/${id}/albums`} className={({ isActive }) =>
                (isActive ? `${styles.tab} ${styles.active}` : styles.tab)} >
                Albums
            </NavLink>
            <NavLink to={`/users/${id}/todos`} className={({ isActive }) =>
                (isActive ? `${styles.tab} ${styles.active}` : styles.tab)} >
                Todos
            </NavLink>
            <NavLink to={`/users/${id}/posts`} className={({ isActive }) =>
                (isActive ? `${styles.tab} ${styles.active}` : styles.tab)} >
                Posts
            </NavLink>
        </nav >
    )
}

export default UserTabs;