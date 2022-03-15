import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

function Header() {

  const Container = styled(AppBar)({
    position: 'static',
    height: '9vh',
    backgroundColor : '#060606',
    borderBottom: '1px solid #80808066'
  });

  const logo = './Assets/codepen-logo.png';

  return (
    <Container>
      <Toolbar style={{paddingLeft: 10}}>
        <img src={logo} alt="logo" style={{ width: 40, height: 35 }}></img>
      </Toolbar>
    </Container>
  )
}

export default Header