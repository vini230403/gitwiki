import styles from "./ItemRepo.module.css"


const ItemRepo = ({repo, handleRemoveRepo}) => {

  
  return (
    <div className={styles.container_itemRepo} >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank'>Ver repositório</a><br />
        <a href='#' className={styles.remover} onClick={() => handleRemoveRepo(repo.id)}>Remover</a>
        <hr />
    </div>
  )
}

export default ItemRepo