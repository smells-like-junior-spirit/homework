import styles from './Modal.module.css'
import { createPortal } from "react-dom";
import { type PropsWithChildren, type MouseEvent } from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {

    if (!isOpen) return null;

    return (createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e: MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()} >
                {children}
            </div>
        </div >,
        document.body
    )
    )
}

const ModalHeader = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.modalHeader}>{children}</div>
    )
}

Modal.Header = ModalHeader;

const ModalBody = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.modalBody}>{children}</div>
    )
}

Modal.Body = ModalBody;

const ModalFooter = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.modalFooter}>{children}</div>
    )
}

Modal.Footer = ModalFooter;

export default Modal;
