import stylesHeader from './LayoutHeader.module.css'
import { useTheme } from '../../shared/lib/theme/useTheme'
import { useState } from 'react'
import Modal from '../../shared/ui/Modal/Modal'
import Button from '../../shared/ui/Button/Button'
import ThemeSwitcher from '../../features/ThemeSwitcher/ThemeSwitcher'

const LayoutHeader = () => {

    const { theme } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className={`${stylesHeader.header} ${theme === 'light' ? stylesHeader.light : stylesHeader.dark}`}>
            <h1 className={stylesHeader.h1}>Homework форум</h1>
            <div className={stylesHeader.btns}>
                <Button
                    onClickHandler={() => setIsModalOpen(true)}
                    value={`О проекте`}
                    variant={theme === 'light' ? 'light' : 'dark'}>
                </Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                </Modal>
                <ThemeSwitcher></ThemeSwitcher>
            </div>

        </header>
    )
}

export default LayoutHeader;