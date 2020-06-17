import React from 'react'

interface TextFieldProps {
  onChange: () => void
  value: string
}

export const TextField = (props: TextFieldProps) => {
  return <input value={props.value} onChange={props.onChange} />
}
