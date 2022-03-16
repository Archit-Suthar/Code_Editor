import React from 'react'
import { useContext } from 'react';
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import Editor from './Editor'
import { DataContext } from '../Context/DataProvider';

// This Container - Wraps all 3 editors in it 
// Editor - Single editor 
const Container = styled(Box)({
    display: 'flex',
    backgroundColor: '#060606',
    height: '52vh'
});
function CodeArea() {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
    return (
        <Container>
            <Editor 
                heading="HTML"
                icon="/"
                color="#FF3C41"
                mode="xml"
                code={html}
                setCode={setHtml}
            />
            <Editor 
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                mode="css"
                code={css}
                setCode={setCss}
            />
            <Editor 
                heading="JS"
                icon="()"
                color="#FCD000"
                mode="javascript"
                code={js}
                setCode={setJs}
            />
        </Container>
    )
}

export default CodeArea