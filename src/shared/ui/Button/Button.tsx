import styles from './Button.module.css'

const Button = ({ onClickHandler, value, variant }) => {

    return (
        <button
            onClick={onClickHandler}
            className={`${styles.btn} ${styles[variant]}`} >
                { value }
        </button >
    )
}

export default Button;