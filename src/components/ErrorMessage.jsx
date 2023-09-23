import React from 'react'

const ErrorMessage = (props) => {
  return (
    <p className="error">
    <span>⛔️</span> {props.message}
  </p>
  )
}

export default ErrorMessage