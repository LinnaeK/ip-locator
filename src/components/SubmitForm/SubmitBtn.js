import styles from './SubmitBtn.module.css'

const SubmitBtn = function (props) {
  return (
    <div className={styles.btnContainer}>
      <button 
        type="submit"
        className={styles.submitBtn}
      >
        {props.isLoading ?
          'Loading' :
          'Submit'
        }
      </button>
    </div>
  )
}

export default SubmitBtn