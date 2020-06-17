import { SubTitleComponent } from 'component/SubTitle'
import { PageAContext, PageAContextType } from 'page/PageA'
import React from 'react'

// interface BodyComponentProps {
//     // onChange: () => void
// }

export const BodyComponent = () => {
  const pageAContext: PageAContextType = React.useContext(PageAContext)

  return (
    <main>
      <SubTitleComponent title={pageAContext.name} />
    </main>
  )
}
