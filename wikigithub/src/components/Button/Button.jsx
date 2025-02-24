import styles from "./Button.module.css"

const Button = ({onClick}) => {
  return (
    <div>
        <button className={styles.container_button} onClick={onClick}>Buscar</button>
    </div>
  )
}

export default Button