import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/DataProvider'

import styled from '@emotion/styled'
import { Box } from '@mui/system'

    const Container = styled(Box)({
        height: '39vh'
    })

function OutputArea() {
    const {html, css, js} = useContext(DataContext);
    const [srcCode, setSrcCode] = useState('');

    const src = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
      setTimeout(() => {
        setSrcCode(src);
      }, 2000);
    }, [html, css, js])
    
    return (
        <Container style={html || css || js ? null : {backgroundColor: '#282a2ed1'}}>
            <iframe
                srcDoc={srcCode}
                title='Output'
                sandbox='allow-scripts'
                frameborder="0"
                width='100%'
                height='100%'
            >
                Output
            </iframe>
        </Container>
    )
}

export default OutputArea