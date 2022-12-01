import React from 'react'

export const Button = (props) => {
  let disabled = ''
  if (props.disabled) {
    disabled = 'true'
  }
  let className = 'btn '
  const classes = () => {
    const classList = props.type.split(' ')
    classList.map((item) => {
      className += 'btn_' + item + ' '
    })
  }
  if (props.type) {
    classes()
  }
  return (
    <button className={className} disabled={disabled}>
      {props.text}
    </button>
  )
}
