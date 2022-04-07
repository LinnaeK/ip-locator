import styles from './IPInput.module.css'

function IPInput (props) {
  return (
    <div>
      <input 
        type="text" 
        minLength="7" 
        maxLength="18" 
        size="15" 
        value={props.value}
        onChange={props.onChange}
        className={styles.ipInput}
        placeholder="XXX.XXX.XXX.XXX/XX"
        onFocus={props.onFocus}
      />
    </div>
  )
}

export default IPInput