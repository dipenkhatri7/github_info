import React from 'react'
import styled from 'styled-components';
import ReactTilt from 'react-universal-tilt';

const Container = styled.div`

    margin: 40.5px;
    position: relative;
    border: 3px solid black;
    border-radius: 10px;

`
const Image = styled.img`
    width: 400px;
    height: 500px;
    object-fit: cover;
    opacity: 0.9;

`
const Information = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
`
const Title= styled.h1`
    color: lightcyan;
    margin-top: 455px;
    font-size: 40.45px;
    font-family: 'Urbanist', sans-serif;
`


const SpeakerTilt = ({items}) => {
    return (
        <ReactTilt className="tilt-elem my-tilt">
        <Container>
                <Image src={items.img}/>
                < Information>
                    <Title>{items.title}</Title>
                </Information>
        </Container>
        </ReactTilt>
    )
}

export default SpeakerTilt;