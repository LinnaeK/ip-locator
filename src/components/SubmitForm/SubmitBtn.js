import styles from './SubmitBtn.module.css'

const SubmitBtn = function () {
  return (
    <div className={styles.btnContainer}>
      <button 
        type="submit"
        className={styles.submitBtn}
      >
        Submit
      </button>
    </div>
  )
}

export default SubmitBtn