import stylesHeader from './LayoutHeader.module.css'
import { useTheme } from '../../shared/lib/theme/useTheme'
import { useState } from 'react'
import Modal from '../../shared/ui/Modal/Modal'

const LayoutHeader = () => {

    const { theme, toggleTheme } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className={`${stylesHeader.header} ${theme === 'light' ? stylesHeader.light : stylesHeader.dark}`}>
            <h1>Homework форум</h1>
            <div className={stylesHeader.other}>
                <button onClick={() => setIsModalOpen(true)}>О проекте</button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                </Modal>
                <button className={theme === 'light' ? stylesHeader.dark : stylesHeader.light}
                    onClick={toggleTheme}>{theme === 'light' ? 'Темная тема' : 'Светлая тема'}</button>
            </div>

        </header>
    )
}

export default LayoutHeader;