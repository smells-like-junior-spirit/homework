import styles from './Button.module.css'

interface ButtonProps {
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
    value: string;
    variant: 'light' | 'dark';
}

const Button = ({ onClickHandler, value, variant } : ButtonProps) => {

    return (
        <button
            onClick={onClickHandler}
            className={`${styles.btn} ${styles[variant]}`} >
                { value }
        </button >
    )
}

export default Button;