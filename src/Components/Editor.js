import React from 'react'

//material ui imports
import { styled } from '@mui/system';
import { Box } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

//codemirror imports

import {Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';


function Editor({ heading, icon, color, mode, code, setCode }) {

    const Heading = styled(Box)({
        backgroundColor: '#1d1e22',
        display: 'flex',
        padding: '9px 12px',
        fontWeight: '600'
    })
    const Header = styled(Box)({
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor:'#060606',
        color: '#AAAEBC',
    })

    const Container = styled(Box)({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 8px 8px'
    })

    const handleChange = (editor, data, value) => {
        setCode(value);
    }
    return (
        <Container>
            <Header>
                <Heading>
                    <Box 
                        component="span" 
                        style={{ 
                            backgroundColor: color, 
                            height: 15, 
                            width: 19,
                            color: '#000',
                            display: 'flex',
                            placeContent:'center',
                            alignItems:'center',
                            paddingBottom: 5,
                            borderRadius: 4,
                            marginRight: 5,
                            fontSize: '18px'
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize= 'small'
                    style={{alignSelf: 'center'}}                
                />
            </Header>
            
            <ControlledEditor
                value={code}
                onBeforeChange={handleChange}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: mode,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    )
}

export default Editor