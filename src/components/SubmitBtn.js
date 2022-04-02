const SubmitBtn = function (props) {
  return (
    <button type="submit">
      {props.isLoading ?
        'Loading' :
        'Submit'
      }
    </button>
  )
}

export default SubmitBtn