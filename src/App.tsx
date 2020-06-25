import { CssBaseline } from '@material-ui/core'
import { BmiContextProvider } from 'page/bmi/providers/BmiContextProvider'
import { BmiListPage } from 'page/bmi/BmiListPage'
import { BmiContextType } from 'page/bmi/models/BmiContextModel'
import React from 'react'
import './App.css'

export const BmiContext = React.createContext({} as BmiContextType) // こう宣言しないと怒られる。

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <BmiContextProvider>
                <BmiListPage />
                {/* Bmiコンテキストに関連するページを追加していく */}
            </BmiContextProvider>

            {/* 別のコンテキストを追加していく */}
        </div>
    )
}

export default App
