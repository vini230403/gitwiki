import styles from "./Input.module.css"


const Input = ({value, onChange}) => {
  return (
    <div className={styles.container_input}>
        <input  value={value} onChange={onChange} />
    </div>
  )
}

export default Input