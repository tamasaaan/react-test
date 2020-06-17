import { TextField } from 'component/TextField'
import { PageAContext, PageAContextType } from 'page/PageA'
import React, { useContext } from 'react'

interface FormProps {
  onClick: () => void
}

export const Form = (props: FormProps) => {
  const pageAContext: PageAContextType = useContext(PageAContext)

  return (
    <div>
      <TextField value={pageAContext.note} onChange={props.onClick} />
    </div>
  )
}
