import { BmiContext } from 'App'
import { INIT_BMI_CONTEXT_STATE } from 'page/bmi/constant/INIT_BMI_CONTEXT_STATE'
import { bmiReducer } from 'page/bmi/reducers/BmiReducer'
import React from 'react'

export function BmiContextProvider(props: any) {
  // useReducerでreducer関数と初期値をセット
  const [state, dispatch] = React.useReducer(bmiReducer, INIT_BMI_CONTEXT_STATE)
  const value = { state, dispatch }

  return (
    // コンテキストプロバイダーとしてuseReducerのstateとdispatchをコンテキストに設定
    <BmiContext.Provider value={value}>{props.children}</BmiContext.Provider>
  )
}
