import styles from './modal.module.sass'

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} >
        <div className={styles.modal}>{children}</div>
      </div>
    </>
  )
}
