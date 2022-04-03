import styles from './IPInput.module.css'

function IPInput (props) {
  console.log('IPINPUT value', props.value)
  return (
    <div>
      <input 
        type="text" 
        minLength="7" 
        maxLength="18" 
        size="15" 
        pattern="\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))(\/(([3]?[0-2])|([0-2]?[0-9])))?\b"
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