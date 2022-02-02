import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-family: 'Urbanist', sans-serif;
    font-weight: 300;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Nav = () => {
    return (
        <Container>
            <Title>
                LET'S CODE
            </Title>
        </Container>
           
    )
}

export default Nav
