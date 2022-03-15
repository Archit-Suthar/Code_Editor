import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext(null);

function DataProvider({ children }) {

        const [html, setHtml] = useState("")
        const [css, setCss] = useState("")
        const [js, setJs] = useState("")

    return (
        <DataContext.Provider value={{html, css, js, setHtml, setCss, setJs}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider