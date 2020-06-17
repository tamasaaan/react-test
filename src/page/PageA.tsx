import { BodyComponent } from 'component/organisms/BodyComponent'
import { Form } from 'component/organisms/Form'
import { NavigationComponent } from 'component/organisms/NavigationComponent'
import React, { Context } from 'react'

export interface PageAContextType {
  name: string
  age: number
  note: string
}

const resource: PageAContextType = {
  name: '名前',
  age: 23,
  note: 'こんにちわ',
}

export const PageAContext: Context<PageAContextType> = React.createContext(
  resource,
) // 渡している空文字列はデフォルトの値。

export const PageA = () => {
  const onClick = () => {
    alert('onClick')
  }

  return (
    <PageAContext.Provider value={resource}>
      {/*<NavigationComponent/>*/}
      {/*<BodyComponent/>*/}

      <Form onClick={onClick} />

      <NavigationComponent />

      <BodyComponent />
    </PageAContext.Provider>
  )
}
