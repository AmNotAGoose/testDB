import styles from './ContentContainer.module.css';

function ContentContainer({ children, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer
