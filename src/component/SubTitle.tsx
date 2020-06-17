import React from 'react'

interface SubTitleComponent {
  title: string
}

export const SubTitleComponent = (props: SubTitleComponent) => (
  <div>{props.title}</div>
)
