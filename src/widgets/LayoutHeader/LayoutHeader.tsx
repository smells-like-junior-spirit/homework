import stylesHeader from './LayoutHeader.module.css'
import { useTheme} from '../../shared/lib/theme/useTheme'
import { useState } from 'react'
import Modal from '../../shared/ui/Modal/Modal'
import Button from '../../shared/ui/Button/Button'
import ThemeSwitcher from '../../features/ThemeSwitcher/ThemeSwitcher'


type Theme = 'light' | 'dark';

interface IntThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const LayoutHeader = () => {

    const { theme } = useTheme() as IntThemeContext;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className={`${stylesHeader.header} ${theme === 'light' ? stylesHeader.light : stylesHeader.dark}`}>
            <h1 className={stylesHeader.h1}>Добро пожаловать на Homework форум</h1>
            <div className={stylesHeader.btns}>
                <Button
                    onClickHandler={() => setIsModalOpen(true)}
                    value={`О проекте`}
                    variant={theme === 'light' ? 'light' : 'dark'}>
                </Button>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Modal.Header>
                        <h2>Информация о проекте</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <div>Здесь размещена текущая информация о проекте. Это приложение для просмотра постов и комментариев, основанное на публичном API JSONPlaceholder. Данный проект создан с использованием инструментов React, Vite, Typescript, CSSModules.</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClickHandler={() => setIsModalOpen(false)}
                            value={`Закрыть окно`}
                            variant={theme === 'light' ? 'light' : 'dark'}>
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ThemeSwitcher></ThemeSwitcher>
            </div>

        </header>
    )
}

export default LayoutHeader;