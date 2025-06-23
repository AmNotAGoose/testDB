import styles from './Button.module.css';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button onClick={onClick} type={type} className={styles.button}>{children}</button>
  )
}

export default Button
