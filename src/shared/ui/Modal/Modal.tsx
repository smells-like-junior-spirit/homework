import styles from './Modal.module.css'
import { createPortal } from "react-dom";

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {

    if (!isOpen) return null;

    return (createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content}>
            <div className={styles.window} onClick={(e) => e.stopPropagation()} >
                    <h2>Информация о проекте</h2>
                    <p>Здесь размещена текущая информация о проекте. Это приложение для просмотра постов и комментариев, основанное на публичном API JSONPlaceholder. Данный проект создан с использованием инструментов React, Vite, Typescript, CSSModules.</p>
                    <button className={styles.button} onClick={onClose}>Закрыть окно</button>
                </div>
            </div >
        </div >,
    document.body
    )
    )
}

export default Modal;