import React from 'react'

interface TitleComponent {
  title: string
}

export const TitleComponent = (props: TitleComponent) => (
  <div>{props.title}</div>
)
