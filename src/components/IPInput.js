function IPInput (props) {
  console.log('IPINPUT value', props.value)
  return (
    <div>
      <input 
        type="text" 
        minLength="7" 
        maxLength="15" 
        size="15" 
        pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default IPInput