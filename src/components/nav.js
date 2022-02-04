import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
    height: 65.45px;
    border: 1px solid black;
`
const Title = styled.h1`
    font-family: 'Urbanist', sans-serif;
    font-weight: 300;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;

`

// const Menu = styled.div``


const Nav = () => {
   
    return (
        <Container>
            {/* <Menu>
            </Menu> */}
            <Title>
                LET'S CODE
            </Title>
            
        </Container>
           
    )
}

export default Nav
