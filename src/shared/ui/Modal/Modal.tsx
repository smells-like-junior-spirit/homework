import styles from './Modal.module.css'
import { createPortal } from "react-dom";

interface IModal {
    isOpen?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {

    if (!isOpen) return null;

    return (createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()} >
                {children}
                {/* <button className={styles.button} onClick={onClose}>Закрыть окно</button> */}
            </div>
        </div >,
        document.body
    )
    )
}

const ModalHeader = ({ children }: IModal) => {
    return (
        <div className={styles.modalHeader}>{children}</div>
    )
}

Modal.Header = ModalHeader;

const ModalBody = ({ children }: IModal) => {
    return (
        <div className={styles.modalBody}>{children}</div>
    )
}

Modal.Body = ModalBody;

const ModalFooter = ({ children }: IModal) => {
    return (
        <div className={styles.modalFooter}>{children}</div>
    )
}

Modal.Footer = ModalFooter;

export default Modal;
