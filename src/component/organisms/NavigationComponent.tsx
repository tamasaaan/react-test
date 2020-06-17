import { TitleComponent } from 'component/Title'
import { PageAContext, PageAContextType } from 'page/PageA'
import React from 'react'

// interface NavigationComponentProps {
//     // onChange: () => void
// }

export const NavigationComponent = () => {
  const pageAContext: PageAContextType = React.useContext(PageAContext)

  return (
    <header>
      //
      Provider配下のコンテキストでは、その値をConsumerコンポーネントから受け取ることができる。
      // Render Propsと同じように受け取る。function as a childとも呼ばれる。
      <TitleComponent title={pageAContext.name} />
      {/*<NannkanoButtonComponent  />*/}
      {/*<NannkanoMenuComponent />*/}
    </header>
  )
}
